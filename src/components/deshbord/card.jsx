import React from 'react'

function Card() {
  return (
    <div className='grid md:grid-cols-4 md:gap-6 gap-2'>
        <div className='bg-white px-4 py-6 rounded-md text-xl shadow-lg'>
            <h3>📦 Total Orders</h3>
            <p className='font-semibold mt-2'>120</p>
        </div>

        <div className='bg-white px-4 py-6 rounded-md text-xl shadow-lg'>
            <h3>⏳ Pending Deliveries</h3>
            <p className='font-semibold mt-2'>15</p>
        </div>

        <div className='bg-white px-4 py-6 rounded-md text-xl shadow-lg'>
            <h3>📅 Next 3 Days</h3>
            <p className='font-semibold mt-2'>5 Orders</p>
        </div>

        <div className='bg-white px-4 py-6 rounded-md text-xl shadow-lg'>
            <h3>💰 Due Payments</h3>
            <p className='font-semibold mt-2'>৳35,000</p>
        </div>
        
    </div>
  )
}

export default Card