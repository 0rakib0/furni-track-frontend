'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
function UpdateDealer({ dealer }) {
    const [loading, setLoading] = useState(false)
    const dealerId = dealer?.id


    const handleFormSubMit = event => {
        event.preventDefault()
        setLoading(true)


        const form = event.target;
        const dealer_name = form.name.value;
        const dealer_age = form.age.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const dealerFormData = new FormData()
        dealerFormData.append('name', dealer_name);
        dealerFormData.append('age', dealer_age);
        dealerFormData.append('phone', phone);
        dealerFormData.append('address', address);


        fetch(`http://127.0.0.1:8000/dealers/${dealerId}/`, {
            method: 'PATCH',
            body: dealerFormData
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Dealer Data Successfully Updated");
                setLoading(false)
                form.reset();
                document.getElementById('update_dealer').close();

            })

            .catch(error => {
                toast.error(error);
                setLoading(false)
            })




    }


    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('update_dealer').showModal()}>open modal</button>
            <dialog id="update_dealer" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleFormSubMit}>
                        <div className='bg-white p-4 md:m-auto rounded-lg shadow-lg'>
                            <h3 className='text-2xl text-center '>Update Dealer</h3>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Dealer Name</legend>
                                <input type="text" name='name' className="input w-full focus:outline-none" defaultValue={dealer?.name} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Dealer Age</legend>
                                <input type="text" name='age' className="input w-full focus:outline-none" defaultValue={dealer?.age} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Dealer Phone</legend>
                                <input type="text" name='phone' className="input w-full focus:outline-none" defaultValue={dealer?.phone} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Dealer Address</legend>
                                <input type="text" name='address' className="input w-full focus:outline-none" defaultValue={dealer?.address} />
                            </fieldset>

                            <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>
                                {loading ? <span className="loading loading-bars loading-lg"></span> : 'Update Dealer'}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default UpdateDealer