"use client"
import DeleteAlart from '@/components/deleteConfirmationAlert/DeleteAlart'
import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { ImBin } from 'react-icons/im'
import { toast } from 'react-toastify'
import SingleExpenseView from '../SingleExpenseView/SingleExpenseView'

function ExpenseReport({ expenseData }) {
    const [expensesData, setExpensesData] = useState(expenseData)
    const [selectExpense, setSelectExpense] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const handleDeleteClick = (expence) => {
        setSelectExpense(expence);
        setIsModalOpen(true);
    }

    const handleView = (expence) => {
        setSelectExpense(expence)
        document.getElementById("view_single_expense").showModal();
    }



    const handleConfirmDelete = () => {

        if (selectExpense) {
            fetch(`http://127.0.0.1:8000/employee-expense/${selectExpense.id}/`, {
                method: 'DELETE',
            })

                .then(res => res)
                .then(() => {
                    toast.success("Employee expense Data deleted successfully")
                    const afterDeleteExpenseData = expensesData.filter(expense => expense.id !== selectExpense.id)
                    setExpensesData(afterDeleteExpenseData)
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
                                    <tr key={expense?.id}>
                                        <th>{index + 1}</th>
                                        <td>{expense?.employee?.name}</td>
                                        <td>{expense?.expense_title}</td>
                                        <td>{expense?.expenses_category}</td>
                                        <td>{expense?.amount}</td>
                                        <td>{expense?.approved_by}</td>
                                        <td>
                                            <button onClick={() => handleView(expense)} className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                            </button>

                                            <button onClick={() => handleDeleteClick(expense)} className="badge badge-soft text-red-400 mr-2">
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
            <SingleExpenseView singleExpenceData={selectExpense}></SingleExpenseView>
            <DeleteAlart
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmDelete}
            />
        </div>
    )
}

export default ExpenseReport