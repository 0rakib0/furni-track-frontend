"use client"
import React, { useState } from 'react'
import { toast } from 'react-toastify';
function AddDealerForm() {

    const [loading, setLoading] = useState(false)

    const handleFormSubMit = event => {
        event.preventDefault()
        setLoading(true)

        // setTimeout(() => {
        //     // alert("Hello world")
        //     setLoading(false)

        // }, "3000")

        

        const form = event.target;
        const dealer_name = form.name.value;
        const dealer_age = form.age.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const image = form.dealer_pic.files[0];

        const dealerFormData = new FormData()
        dealerFormData.append('name', dealer_name);
        dealerFormData.append('age', dealer_age);
        dealerFormData.append('phone', phone);
        dealerFormData.append('address', address);
        dealerFormData.append('dealer_image', image);


        fetch('http://127.0.0.1:8000/dealers/', {
            method: 'POST', 
            body: dealerFormData
        })

        .then(res => res.json())
        .then(data =>{
           toast.success("Dealer Data Successfully added");
           setLoading(false)
           form.reset();
        })

        .catch(error =>{
            toast.error(error);
            setLoading(false)
        })




    }

   

    return (
        <div>
            <form onSubmit={handleFormSubMit}>
                <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
                    <h3 className='text-2xl text-center '>➕Add Dealer</h3>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Name</legend>
                        <input type="text" name='name' className="input w-full focus:outline-none" placeholder="Customar Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Age</legend>
                        <input type="text" name='age' className="input w-full focus:outline-none" placeholder="Memo Number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Phone</legend>
                        <input type="text" name='phone' className="input w-full focus:outline-none" placeholder="Cusatomar phone number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Address</legend>
                        <input type="text" name='address' className="input w-full focus:outline-none" placeholder="Delivery Address" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Image</legend>
                        <input type="file" name='dealer_pic' className="file-input w-full" />
                    </fieldset>

                    <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>
                        {loading ? <span className="loading loading-bars loading-lg"></span> : 'Add Dealer'} 
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddDealerForm