import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

function AddEmploye() {
    return (
        <div>
            <PageTitle></PageTitle>
            <form>
                <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
                    <h3 className='text-2xl text-center '>➕Add Dealer</h3>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Name</legend>
                        <input type="text" className="input w-full focus:outline-none" placeholder="Customar Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Age</legend>
                        <input type="text" className="input w-full focus:outline-none" placeholder="Memo Number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Phone</legend>
                        <input type="text" className="input w-full focus:outline-none" placeholder="Cusatomar phone number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Address</legend>
                        <input type="text" className="input w-full focus:outline-none" placeholder="Delivery Address" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Dealer Image</legend>
                        <input type="file" className="file-input w-full" />
                    </fieldset>

                    <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>Add Dealer</button>
                </div>
            </form>
        </div>
    )
}

export default AddEmploye