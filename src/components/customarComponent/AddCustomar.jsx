'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function AddCustomarData() {

    const [loading, setLoading] = useState(false)



    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;

        const customarFormData = new FormData()
        customarFormData.append('name', name)
        customarFormData.append('phone', phone)
        customarFormData.append('email', email)
        customarFormData.append('address', address)

        fetch('http://127.0.0.1:8000/customars/', {
            method: 'POST',
            body: customarFormData
        })

            .then(res => res.json())
            .then(data => {
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
        <div>
            <form onSubmit={handleSubmit}>
                <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
                    <h3 className='text-2xl text-center '>➕Add Customar</h3>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Cusatomar Name</legend>
                        <input type="text" name='name' className="input w-full focus:outline-none" placeholder="Customar Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Customar Phone</legend>
                        <input type="text" name='phone' className="input w-full focus:outline-none" placeholder="Cusatomar phone number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Customar Email</legend>
                        <input type="text" name='email' className="input w-full focus:outline-none" placeholder="Customar Email Address" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Customar Address</legend>
                        <input type="text" name='address' className="input w-full focus:outline-none" placeholder="Customar Address" />
                    </fieldset>

                    <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>
                        {loading ? <span className="loading loading-bars loading-lg"></span> : 'Add Customar'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddCustomarData