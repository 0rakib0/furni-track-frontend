"use client"
import DeleteAlart from '@/components/deleteConfirmationAlert/DeleteAlart'
import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { ImBin } from 'react-icons/im'
import { toast } from 'react-toastify'

function PaymentReport({ dealerPaymentss }) {

    const [selectDealerPayment, setSelectDealerPayment] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [delerPayments, setDelaerPayments] = useState(dealerPaymentss)

    console.log(dealerPaymentss)
    const handleDeleteClick = (dealer) => {
        setSelectDealerPayment(dealer);
        setIsModalOpen(true);
    }


    const handleConfirmDelete = () => {

        if (selectDealerPayment) {
            console.log("Deleting dealer:", selectDealerPayment.id);
            fetch(`http://127.0.0.1:8000/dealer-payment/${selectDealerPayment.id}/`, {
                method: 'DELETE',
            })

                .then(res => res)
                .then(() => {
                    toast.success("Dealer Payment Data deleted successfully")
                    const afterDealerPaymentDelete = delerPayments.filter(payment => payment.id !== selectDealerPayment.id)
                    setDelaerPayments(afterDealerPaymentDelete)
                })

                .catch(error => {
                    toast.error(error.message);
                    setLoading(false)
                })
        }
        setIsModalOpen(false);

    }


    return (
        <div>
            <div className='my-6'>
                <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Payment List</h3>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Dealer Name</th>
                                <th>Ref Memo</th>
                                <th>Payment Method</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                delerPayments?.map(dealerPayment => {
                                    return <tr key={dealerPayment?.id}>
                                        <th>{dealerPayment?.id}</th>
                                        <td>{dealerPayment?.dealer?.name}</td>
                                        <td>{dealerPayment?.ref_memo}</td>
                                        <td>{dealerPayment?.payment_method}</td>
                                        <td>{dealerPayment?.amount}</td>
                                        <td>
                                            <button className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                            </button>

                                            <button onClick={() => { handleDeleteClick(dealerPayment) }} className="badge badge-soft text-red-400 mr-2">
                                                <span><ImBin></ImBin></span>
                                            </button>
                                            <DeleteAlart status='dealer'></DeleteAlart>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <DeleteAlart
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmDelete}
            />
        </div>
    )
}

export default PaymentReport