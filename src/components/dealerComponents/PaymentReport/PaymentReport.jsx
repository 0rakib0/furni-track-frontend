import DeleteAlart from '@/components/deleteConfirmationAlert/DeleteAlart'
import React from 'react'
import { FaPencilAlt, FaRegEye } from 'react-icons/fa'
import { ImBin } from 'react-icons/im'

function PaymentReport({ dealerPayments }) {




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
                                dealerPayments.map(dealerPayment => {
                                    return <tr>
                                        <th key={dealerPayment?.id}>{dealerPayment?.id}</th>
                                        <td>{dealerPayment?.dealer?.name}</td>
                                        <td>{dealerPayment?.ref_memo}</td>
                                        <td>{dealerPayment?.payment_method}</td>
                                        <td>{dealerPayment?.amount}</td>
                                        <td>
                                            <button className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                            </button>

                                            <button className="badge badge-soft text-red-400 mr-2">
                                                <span><ImBin></ImBin></span>
                                            </button>
                                            <DeleteAlart status='dealer'></DeleteAlart>

                                            <button className="badge badge-soft badge-primary mr-2">
                                                <span> <FaPencilAlt></FaPencilAlt> </span></button>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PaymentReport