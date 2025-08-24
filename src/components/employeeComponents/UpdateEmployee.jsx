'use client'
import React, { useState } from 'react'

function UpdateEmployee({ employee }) {

    const [loading, setLoading] = useState(false)


    return (
        <div>
            <dialog id="UpdateEmployeeModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form>
                        <div className='bg-white p-4 rounded-lg shadow-lg'>
                            <h3 className='text-2xl text-center '>Update Employee</h3>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Employee Name</legend>
                                <input type="text" name='name' className="input w-full focus:outline-none" placeholder="Employee Name" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Employee Age</legend>
                                <input type="text" name='age' className="input w-full focus:outline-none" placeholder="Employee age" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Address</legend>
                                <input type="text" name='address' className="input w-full focus:outline-none" placeholder="address" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Employee Phone</legend>
                                <input type="text" name='phone' className="input w-full focus:outline-none" placeholder="Employee phone number" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Employee Position</legend>
                                <select defaultValue="Sals-man" name='position' className="select w-full">
                                    <option disabled={true}>--SELECT--</option>
                                    <option defaultValue='Need-Approve'>Manager</option>
                                    <option defaultValue='sales'>Sales Man</option>
                                    <option defaultValue='Chairman'>Chairman</option>
                                    <option defaultValue='CEO'>CEO</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Join Date</legend>
                                <input type="date" name='join_date' className="input w-full focus:outline-none" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Performance Status</legend>
                                <select defaultValue="Good" name='performance' className="select w-full">
                                    <option disabled={true}>--SELECT--</option>
                                    <option defaultValue='Need-Approve'>Need Approve</option>
                                    <option defaultValue='Good'>Good</option>
                                    <option defaultValue='Better'>Better</option>
                                    <option defaultValue='Best'>Best</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Employee Image</legend>
                                <input type="file" name='image' className="file-input w-full" />
                            </fieldset>

                            <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>
                                {loading ? <span className="loading loading-bars loading-lg"></span> : 'Add Employee'}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default UpdateEmployee