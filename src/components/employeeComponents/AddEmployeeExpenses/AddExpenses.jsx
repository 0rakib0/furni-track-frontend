'use client'
import React, { useEffect, useState } from 'react'

function AddExpenses() {
    const [loading, setLoading] = useState(false)
    const [dealers, setDealers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dealerRes = await fetch('http://127.0.0.1:8000/employee/')
                const dealerData = await dealerRes.json()
                setDealers(dealerData)

            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <form>
                <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
                    <h3 className='text-2xl text-center '>➕Add Employee Expense</h3>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Select Employee</legend>
                        <select defaultValue="" name='employee' className="select w-full">
                            <option >--SELECT--</option>
                            {
                                dealers.map(dealer => {
                                    return <option key={dealer.id} value={dealer.id}>{dealer.name}</option>
                                })
                            }
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Expense Title</legend>
                        <input type="text" name='expens-title' className="input w-full focus:outline-none" placeholder="Expense Title" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Expense Category</legend>
                        <select defaultValue="" name='employee' className="select w-full">
                            <option >--SELECT--</option>
                            <option>Salary</option>
                            <option>Advance</option>
                            <option>Bonus</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Enter Amount</legend>
                        <input type="number" name='address' className="input w-full focus:outline-none" placeholder="Enter Amount" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Expense Category</legend>
                        <select defaultValue="" name='employee' className="select w-full">
                            <option >--SELECT--</option>
                            <option>Oveek</option>
                            <option>Sayeem</option>
                            <option>Rakib</option>
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