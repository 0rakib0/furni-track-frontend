import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

function AddOrder() {
    return (
        <div>
            <PageTitle></PageTitle>
            <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg'>
                <h3 className='text-2xl text-center '>➕Add Order</h3>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg font-thin">Customar Name</legend>
                    <input type="text" className="input w-full focus:outline-none" placeholder="Customar Name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg font-thin">Memo Number</legend>
                    <input type="text" className="input w-full focus:outline-none" placeholder="Memo Number" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg font-thin">Customar Phone</legend>
                    <input type="text" className="input w-full focus:outline-none" placeholder="Cusatomar phone number" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg font-thin">Delivery Address</legend>
                    <input type="text" className="input w-full focus:outline-none" placeholder="Delivery Address" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg font-thin">Delivery Date</legend>
                    <input type="date" className="input w-full focus:outline-none" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg font-thin">Frame Show Date</legend>
                    <input type="text" className="input w-full focus:outline-none" placeholder="Frame Show Date" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg font-thin">Select Dealer</legend>
                    <input type="text" className="input w-full focus:outline-none" placeholder="Frame Show Date" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg font-thin">Select Employee</legend>
                    <input type="text" className="input w-full focus:outline-none" placeholder="Frame Show Date" />
                </fieldset>
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-ful border p-4">
                    <legend className="fieldset-legend">Delivery Status</legend>
                    <label className="label">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        delivered/pending
                    </label>
                </fieldset>
                <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out'>Add Order</button>
            </div>
        </div>
    )
}

export default AddOrder