'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

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
        const address = form.address.value;
        const image = form.image.files[0];

        const employeeFormData = new FormData()

        employeeFormData.append('name', employeeName)
        employeeFormData.append('age', employeeAge)
        employeeFormData.append('phone', phone)
        employeeFormData.append('position', position)
        employeeFormData.append('join_date', join_date)
        employeeFormData.append('performance_status', performance)
        employeeFormData.append('address', address)
        employeeFormData.append('employee_image', image)
       

        fetch('http://127.0.0.1:8000/employee/', {
            method: 'POST',
            body: employeeFormData
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Dealer Data Successfully added");
                setLoading(false)
                form.reset();
            })

            .catch(error => {
                toast.error(error);
                setLoading(false)
            })
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
    )
}

export default AddEmployee