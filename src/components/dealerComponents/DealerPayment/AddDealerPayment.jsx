"use client"
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function AddDealerPayment() {

  const [loading, setLoading] = useState(false)
  const [dealers, setDealers] = useState([])


  const handleFormSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    const form = event.target;
    const dealer = form.dealer_id.value;
    const ref_memo = form.ref_memo.value;
    const payment_method = form.payment_method.value;
    const amount = form.amount.value;

    const dealerPaymentFormData = new FormData()
    dealerPaymentFormData.append('dealer', dealer)
    dealerPaymentFormData.append('ref_memo', ref_memo)
    dealerPaymentFormData.append('payment_method', payment_method)
    dealerPaymentFormData.append('amount', amount)

    fetch('http://127.0.0.1:8000/dealer-payment/', {
      method: 'POST',
      body: dealerPaymentFormData
    })

      .then(res => res.json())
      .then(data => {
        toast.success("Dealer Payment Data Successfully added");
        setLoading(false)
        form.reset();
      })

      .catch(error => {
        toast.error(error);
        setLoading(false)
      })
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const dealerRes = await fetch('http://127.0.0.1:8000/dealers/')
        const dealerData = await dealerRes.json()
        setDealers(dealerData)

      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
          <h3 className='text-2xl text-center '>➕Add Dealer Payment</h3>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Select Delaer</legend>
            <select defaultValue="" name='dealer_id' className="select w-full">
              <option >--SELECT--</option>
              {
                dealers.map(dealer => {
                  return <option key={dealer.id} value={dealer.id}>{dealer.name}</option>
                })
              }
            </select>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Reference Memo (Optional)</legend>
            <input type="text" name='ref_memo' className="input w-full focus:outline-none" placeholder="Memo Number" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Payment Metohd</legend>
            <input type="text" name='payment_method' className="input w-full focus:outline-none" placeholder="Payment Method" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-thin">Enter Amount</legend>
            <input type="number" name='amount' className="input w-full focus:outline-none" placeholder="Enter Amount" />
          </fieldset>

          <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>
            {loading ? <span className="loading loading-bars loading-lg"></span> : 'Add Payment'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddDealerPayment