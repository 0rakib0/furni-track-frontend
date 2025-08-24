"use client"
import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { FaRegEye, FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import ViewSingleEmployee from './ViewSingleEmployee';
import DeleteAlart from '@/components/deleteConfirmationAlert/DeleteAlart';
import UpdateEmployee from '../UpdateEmployee';

function EmployeeTable({ employees }) {

    const [employes, setEmployees] = useState(employees)
    const [selectEmployee, setEmployee] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleViewEmployee = (employee) => {
        setEmployee(employee)
        document.getElementById("EmployeeViewModal").showModal();
    }

    const handleuUpdateEmployee = (employee) =>{
        setEmployee(employee)
        document.getElementById('UpdateEmployeeModal').showModal();
    }


    const handleDeleteClick = (employee) => {
        setEmployee(employee);
        setIsModalOpen(true);
    }

    const handleConfirmDelete = () => {

        if (selectEmployee) {
            fetch(`http://127.0.0.1:8000/employee/${selectEmployee.id}/`, {
                method: 'DELETE',
            })

                .then(res => res)
                .then(() => {
                    toast.success("Employee deleted successfully")
                    const afterDeleteEmployee = employes.filter(employe => employe.id !== selectEmployee.id)
                    setEmployees(afterDeleteEmployee)
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
                                employes.map(employee => <tr key={employee.id}>
                                    <th>{employee.id}</th>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.join_date}</td>
                                    <td>
                                        <span className={`badge badge-soft ${employee.performance_status === 'Good'
                                            ? 'bg-yellow-400 text-black'
                                            : employee.performance_status === 'Better'
                                                ? 'bg-blue-500 text-white'
                                                : employee.performance_status === 'Best'
                                                    ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{employee.performance_status}</span>
                                    </td>
                                    <td>
                                        <button onClick={() => handleViewEmployee(employee)} className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                        </button>

                                        <button onClick={() => handleDeleteClick(employee)} className="badge badge-soft text-red-400 mr-2">
                                            <span><ImBin></ImBin></span>
                                        </button>

                                        <button onClick={()=>handleuUpdateEmployee(employee)} className="badge badge-soft badge-primary mr-2">
                                            <span> <FaPencilAlt></FaPencilAlt> </span></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                    <ViewSingleEmployee employee={selectEmployee}></ViewSingleEmployee>
                    <DeleteAlart
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onConfirm={handleConfirmDelete}
                    ></DeleteAlart>
                    <UpdateEmployee employee={selectEmployee}></UpdateEmployee>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTable