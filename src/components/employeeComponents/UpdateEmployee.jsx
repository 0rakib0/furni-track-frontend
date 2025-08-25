'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function UpdateEmployee({ employee }) {
    const [loading, setLoading] = useState(false)
    const employeeId = employee?.id

    const handleFormSubMit = event => {
        event.preventDefault()
        setLoading(true)


        const form = event.target;
        const employeeName = form.name.value;
        const employeeAge = form.age.value;
        const phone = form.phone.value;
        const position = form.position.value;
        const performance = form.performance.value;
        const address = form.address.value;
 

        const employeeFormData = new FormData()

        employeeFormData.append('name', employeeName)
        employeeFormData.append('age', employeeAge)
        employeeFormData.append('phone', phone)
        employeeFormData.append('position', position)
        employeeFormData.append('performance_status', performance)
        employeeFormData.append('address', address)


        fetch(`http://127.0.0.1:8000/employee/${employeeId}/`, {
            method: 'PATCH',
            body: employeeFormData
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Employee Successfully Updated!");
                setLoading(false)
                form.reset();
                document.getElementById('UpdateEmployeeModal').close();
            })

            .catch(error => {
                toast.error(error);
                setLoading(false)
            })
    }




    return (
        <div>
            <dialog id="UpdateEmployeeModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleFormSubMit}>
                        <div className='bg-white p-4 rounded-lg shadow-lg'>
                            <h3 className='text-2xl text-center '>Update Employee</h3>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Employee Name</legend>
                                <input type="text" name='name' className="input w-full focus:outline-none" defaultValue={employee?.name} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Employee Age</legend>
                                <input type="text" name='age' className="input w-full focus:outline-none" defaultValue={employee?.age} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Address</legend>
                                <input type="text" name='address' className="input w-full focus:outline-none" defaultValue={employee?.address} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Employee Phone</legend>
                                <input type="text" name='phone' className="input w-full focus:outline-none" defaultValue={employee?.phone} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Employee Position</legend>
                                <select defaultValue={employee?.position} name='position' className="select w-full">
                                    <option value={employee?.position}>--SELECT--</option>
                                    <option value='Need-Approve'>Manager</option>
                                    <option value='sales'>Sales Man</option>
                                    <option value='Chairman'>Chairman</option>
                                    <option value='CEO'>CEO</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Performance Status {employee?.performance_status}</legend>
                                <select
                                    name="performance"
                                    defaultValue={employee?.performance_status}   
                                    className="select w-full"
                                >
                                    <option value={employee?.performance_status}>--SELECT--</option>
                                    <option value="Need-Approve">Need Approve</option>
                                    <option value="Good">Good</option>
                                    <option value="Better">Better</option>
                                    <option value="Best">Best</option>
                                </select>
                            </fieldset>


                            <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>
                                {loading ? <span className="loading loading-bars loading-lg"></span> : 'Update Employee'}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default UpdateEmployee