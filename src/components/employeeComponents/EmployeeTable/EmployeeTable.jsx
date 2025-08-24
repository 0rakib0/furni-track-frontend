"use client"
import React, { useState } from 'react'
import { FaRegEye, FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import ViewSingleEmployee from './ViewSingleEmployee';

function EmployeeTable({ employees }) {

    const [selectEmployee, setEmployee] = useState(null)

    const handleViewDealer = (employee) =>{
        setEmployee(employee)
        document.getElementById("EmployeeViewModal").showModal();
    }


    return (
        <div>
            <div className='my-6'>
                <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Employee List</h3>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Contact Number</th>
                                <th>Position</th>
                                <th>Join Date</th>
                                <th>Performance Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                employees.map(employee => <tr key={employee.id}>
                                    <th>{employee.id}</th>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.join_date}</td>
                                    <td>
                                        <span className={`badge badge-soft ${
                                            employee.performance_status === 'Good' 
                                            ? 'bg-yellow-400 text-black'
                                            : employee.performance_status === 'Better' 
                                            ? 'bg-blue-500 text-white'
                                            : employee.performance_status === 'Best' 
                                            ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{employee.performance_status}</span>
                                    </td>
                                    <td>
                                        <button onClick={()=>handleViewDealer(employee)} className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                        </button>

                                        <button className="badge badge-soft text-red-400 mr-2">
                                            <span><ImBin></ImBin></span>
                                        </button>
                                        
                                        <button className="badge badge-soft badge-primary mr-2">
                                            <span> <FaPencilAlt></FaPencilAlt> </span></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                    <ViewSingleEmployee employee={selectEmployee}></ViewSingleEmployee>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTable