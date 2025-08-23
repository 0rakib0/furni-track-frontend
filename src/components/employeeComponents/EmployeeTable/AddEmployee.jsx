'use client'
import React, { useState } from 'react'

function AddEmployee() {

    const [loading, setLoading] = useState(false)

    const handleFormSubMit = event => {
        event.preventDefault()
        setLoading(true)


        const form = event.target;
        const employeeName = form.name.value;
        const employeeAge = form.age.value;
        const phone = form.phone.value;
        const position = form.position.value;
        const join_date = form.join_date.value;
        const performance = form.performance.value;
        const image = form.image.files[0];

        const submitedData = {
            employeeAge,
            employeeName,
            phone,
            position,
            join_date,
            performance,
            image
        }

        console.log(submitedData)

        // const dealerFormData = new FormData()
        // dealerFormData.append('name', dealer_name);
        // dealerFormData.append('age', dealer_age);
        // dealerFormData.append('phone', phone);
        // dealerFormData.append('address', address);
        // dealerFormData.append('dealer_image', image);
    }



        return (
            <form onSubmit={handleFormSubMit}>
                <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
                    <h3 className='text-2xl text-center '>➕Add Employee</h3>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Name</legend>
                        <input type="text" name='name' className="input w-full focus:outline-none" placeholder="Employee Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Age</legend>
                        <input type="text" name='age' className="input w-full focus:outline-none" placeholder="Employee age" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Phone</legend>
                        <input type="text" name='phone' className="input w-full focus:outline-none" placeholder="Employee phone number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Position</legend>
                        <select defaultValue="Sals-man" name='position' className="select w-full">
                            <option disabled={true} selected>--SELECT--</option>
                            <option value='Need-Approve'>Manager</option>
                            <option value='sales'>Sales Man</option>
                            <option value='Chairman'>Chairman</option>
                            <option value='CEO'>CEO</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Join Date</legend>
                        <input type="date" name='join_date' className="input w-full focus:outline-none" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Performance Status</legend>
                        <select defaultValue="Good" name='performance' className="select w-full">
                            <option disabled={true} selected>--SELECT--</option>
                            <option value='Need-Approve'>Need Approve</option>
                            <option value='Good'>Good</option>
                            <option value='Better'>Better</option>
                            <option value='Best'>Best</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Image</legend>
                        <input type="file" name='image' className="file-input w-full" />
                    </fieldset>

                    <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>Add Employee</button>
                </div>
            </form>
        )
    }

    export default AddEmployee