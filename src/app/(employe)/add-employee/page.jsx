import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

function AddEmploye() {
    return (
        <div>
            <PageTitle></PageTitle>
            <form>
                <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
                    <h3 className='text-2xl text-center '>➕Add Employee</h3>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Name</legend>
                        <input type="text" className="input w-full focus:outline-none" placeholder="Employee Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Age</legend>
                        <input type="text" className="input w-full focus:outline-none" placeholder="Employee age" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Phone</legend>
                        <input type="text" className="input w-full focus:outline-none" placeholder="Employee phone number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Position</legend>
                        <input type="text" className="input w-full focus:outline-none" placeholder="Employee Position" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Join Date</legend>
                        <input type="date" className="input w-full focus:outline-none"/>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Performance Status</legend>
                        <input type="text" className="input w-full focus:outline-none"/>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Employee Image</legend>
                        <input type="file" className="file-input w-full" />
                    </fieldset>

                    <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>Add Employee</button>
                </div>
            </form>
        </div>
    )
}

export default AddEmploye