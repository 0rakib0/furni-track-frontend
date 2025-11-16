"use client"
import DeleteAlart from '@/components/deleteConfirmationAlert/DeleteAlart'
import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { ImBin } from 'react-icons/im'

function ExpenseReport({ expenseData }) {
    const [expensesData, setExpensesData] = useState(expenseData)

    return (

        <div>
            <div className='my-6'>
                <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾All Expense List</h3>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Employee</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Expense Amount</th>
                                <th>Aprove</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                expensesData?.map((expense, index) => (
                                    <tr key={expense.id}>
                                        <th>{index + 1}</th>
                                        <td>{expense?.employee?.name}</td>
                                        <td>{expense?.expense_title}</td>
                                        <td>{expense?.expenses_category}</td>
                                        <td>{expense?.amount}</td>
                                        <td>{expense?.approved_by}</td>
                                        <td>
                                            <button className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                            </button>

                                            <button className="badge badge-soft text-red-400 mr-2">
                                                <span><ImBin></ImBin></span>
                                            </button>
                                            <DeleteAlart status='dealer'></DeleteAlart>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseReport