import React from 'react'
import { FaRegEye, FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";

function CustomarTable({ customars }) {
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
                                customars.map(customar => {
                                    return <tr key={customar.id}>
                                        <th>{customar.id}</th>
                                        <td>{customar.name}</td>
                                        <td>{customar.phone}</td>
                                        <td>{customar.email}</td>
                                        <td>{customar.address}</td>
                                        <td>
                                            <button className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                            </button>

                                            <button className="badge badge-soft text-red-400 mr-2">
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
        </div>
    )
}

export default CustomarTable