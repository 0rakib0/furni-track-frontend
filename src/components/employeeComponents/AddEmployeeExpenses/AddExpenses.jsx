'use client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function AddExpenses() {
    const [loading, setLoading] = useState(false)
    const [employes, setEmployes] = useState([])


    const handleFormSubmit = event => {
        event.preventDefault()
        setLoading(true)

        const form = event.target;
        const employee = form.employee.value;
        const expens_title = form.expens_title.value;
        const expense_category = form.expense_category.value;
        const expense_amount = form.expense_amount.value;
        const approve_by = form.approve_by.value;


        const expenseFormData = new FormData();

        expenseFormData.append('employee', employee);
        expenseFormData.append('expense_title', expens_title);
        expenseFormData.append('expenses_category', expense_category);
        expenseFormData.append('amount', expense_amount);
        expenseFormData.append('approved_by', approve_by);

        fetch('http://127.0.0.1:8000/employee-expense/', {
            method: 'POST',
            body: expenseFormData
        })

            .then(res => res.json())
            .then(data => {
                toast.success("Expense Data Successfully added");
                setLoading(false)
                form.reset();
            })

            .catch(error => {
                toast.error(error);
                setLoading(false)
            })


    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                const employeeRes = await fetch('http://127.0.0.1:8000/employee/')
                const employeeData = await employeeRes.json()
                setEmployes(employeeData)

            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
                    <h3 className='text-2xl text-center '>➕Add Employee Expense</h3>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Select Employee</legend>
                        <select defaultValue="" name='employee' className="select w-full">
                            <option >--SELECT--</option>
                            {
                                employes.map(employee => {
                                    return <option key={employee.id} value={employee.id}>{employee.name}</option>
                                })
                            }
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Expense Title</legend>
                        <input type="text" name='expens_title' className="input w-full focus:outline-none" placeholder="Expense Title" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Expense Category</legend>
                        <select defaultValue="" name='expense_category' className="select w-full">
                            <option >--SELECT--</option>
                            <option value="Salary">Salary</option>
                            <option value="Advance">Advance</option>
                            <option value="Bonus">Bonus</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Enter Amount</legend>
                        <input type="number" name='expense_amount' className="input w-full focus:outline-none" placeholder="Enter Amount" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Approved By</legend>
                        <select defaultValue="" name='approve_by' className="select w-full">
                            <option >--SELECT--</option>
                            <option value="Oveek">Oveek</option>
                            <option value="Sayeem">Sayeem</option>
                            <option value="Rakib">Rakib</option>
                        </select>
                    </fieldset>

                    <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>
                        {loading ? <span className="loading loading-bars loading-lg"></span> : 'Add Expense'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddExpenses