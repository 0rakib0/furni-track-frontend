"use client"
import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { FaRegEye, FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import SingleDealerView from '../SingleDealerView/SingleDealerView';
import UpdateDealer from '../UpdateDealer/UpdateDealer';
import DeleteAlart from '@/components/deleteConfirmationAlert/DeleteAlart';

function DealerTable({ dealers }) {

    const [selectDealer, setSelectDealer] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [delers, setDelaers] = useState(dealers)

    const handleView = (dealerData) => {
        setSelectDealer(dealerData)
        document.getElementById("my_modal_5").showModal();
    }

    const handleUpdateDealer = (dealer) =>{
        setSelectDealer(dealer)
        document.getElementById("update_dealer").showModal();
    }

    const handleDeleteClick = (dealer) => {
        setSelectDealer(dealer);
        setIsModalOpen(true);
    }


    const handleConfirmDelete = () => {

        if (selectDealer) {
            console.log("Deleting dealer:", selectDealer.id);
            fetch(`http://127.0.0.1:8000/dealers/${selectDealer.id}/`, {
            method: 'DELETE',
        })

            .then(res => res)
            .then(() => {
                toast.success("Dealer deleted successfully")
                const afterDeleteDealer = delers.filter(dealer => dealer.id !== selectDealer.id)
                setDelaers(afterDeleteDealer)
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
                <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Dealer List</h3>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Dealer ID</th>
                                <th>Dealer Name</th>
                                <th>Contact Number</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                delers.map(deale => {
                                    return <tr key={deale.id}>
                                        <th>1</th>
                                        <td>{deale.id}</td>
                                        <td>{deale.name}</td>
                                        <td>{deale.phone}</td>
                                        <td>{deale.address}</td>
                                        <td>
                                            <button onClick={() => { handleView(deale) }} className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                            </button>

                                            <button onClick={() => { handleDeleteClick(deale) }} className="badge badge-soft text-red-400 mr-2">
                                                <span><ImBin></ImBin></span>
                                            </button>
                                            <DeleteAlart id={deale.id} status='dealer'></DeleteAlart>

                                            <button onClick={() => handleUpdateDealer(deale)} className="badge badge-soft badge-primary mr-2">
                                                <span> <FaPencilAlt></FaPencilAlt> </span></button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* view single dealer details */}
            <SingleDealerView dealer={selectDealer}></SingleDealerView>
            {/* dealer delete alart */}
            <DeleteAlart
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmDelete}
            />
            {/* update Dealer */}
            <UpdateDealer dealer = {selectDealer}></UpdateDealer>
        </div>
    )
}

export default DealerTable