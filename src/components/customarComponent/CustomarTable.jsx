'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { FaRegEye, FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import ViewCustomar from './ViewCustomar';
import DeleteAlart from '../deleteConfirmationAlert/DeleteAlart';

function CustomarTable({ customars }) {

    const [customarsData, setCustomarData] = useState(customars)
    const [selectCustomar, setSelectCustomar] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const handleCustomarView = (customar) => {
        setSelectCustomar(customar)
        document.getElementById('viewsinglecustomar').showModal()
    }

    const handleDeleteClick = (customar) => {
        setSelectCustomar(customar);
        setIsModalOpen(true);
    }
    const handleConfirmDelete = () => {

        if (selectCustomar) {
            fetch(`http://127.0.0.1:8000/customars/${selectCustomar.id}/`, {
                method: 'DELETE',
            })

                .then(res => res)
                .then(() => {
                    toast.success("Customar deleted successfully")
                    const afterDeleteCustomar = customarsData.filter(customar => customar.id !== selectCustomar.id)
                    setCustomarData(afterDeleteCustomar)
                })

                .catch(error => {
                    toast.error(error.message);
                })
        }
        setIsModalOpen(false);





    }


    return (
        <div>
            <div className='my-6'>
                <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Customar List</h3>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customar Name</th>
                                <th>Customa Phone</th>
                                <th>Customar Email</th>
                                <th>Customar Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                customarsData.map(customar => {
                                    return <tr key={customar.id}>
                                        <th>{customar.id}</th>
                                        <td>{customar.name}</td>
                                        <td>{customar.phone}</td>
                                        <td>{customar.email}</td>
                                        <td>
                                            {customar.address?.length > 20
                                                ? customar.address.slice(0, 20) + "..."
                                                : customar.address}
                                        </td>
                                        <td>
                                            <button onClick={() => handleCustomarView(customar)} className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                            </button>

                                            <button onClick={() => handleDeleteClick(customar)} className="badge badge-soft text-red-400 mr-2">
                                                <span><ImBin></ImBin></span>
                                            </button>
                                            {/* <DeleteAlart id={cuastomar.id} status='cuastomarr'></DeleteAlart> */}

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
            <ViewCustomar customar={selectCustomar}></ViewCustomar>
            <DeleteAlart
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmDelete}
            />
        </div>
    )
}

export default CustomarTable