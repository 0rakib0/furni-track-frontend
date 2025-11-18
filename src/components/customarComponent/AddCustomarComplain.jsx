"use client"
import React, { useState } from 'react'

function AddCustomarComplain() {
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = (event) =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const title = form.name.title;
    const memo = form.memo.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const problem_details = form.problem_details.value;
    const service_date = form.service_date.value;
    const issue_image = form.issue_image.files[0];

    console.log(name, title, memo, phone, address, problem_details, service_date, issue_image)


  }



  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
          <h3 className='text-2xl text-center '>➕Add Customar Complain</h3>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Cusatomar Name</legend>
            <input type="text" name='name' className="input w-full focus:outline-none" placeholder="Customar Name" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Title</legend>
            <input type="text" name='title' className="input w-full focus:outline-none" placeholder="Enter title" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Memo Number</legend>
            <input type="text" name='memo' className="input w-full focus:outline-none" placeholder="Enter memo number" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Customar Phone</legend>
            <input type="text" name='phone' className="input w-full focus:outline-none" placeholder="Cusatomar phone number" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Customar Address</legend>
            <input type="text" name='address' className="input w-full focus:outline-none" placeholder="Customar Address" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Problem Details</legend>
            <textarea className="textarea h-24 w-full focus:outline-none" name='problem_details' placeholder="Enter Problem Details Here"></textarea>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Service Date</legend>
            <input type="date" name='service_date' className="input w-full focus:outline-none" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Issues Image</legend>
            <input type="file" name='issue_image' className="file-input w-full" />
          </fieldset>
          <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>
            {loading ? <span className="loading loading-bars loading-lg"></span> : 'Add Customar Complain'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCustomarComplain