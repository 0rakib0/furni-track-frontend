import React from 'react'

function Card({cardData}) {



  return (
    <div className='grid md:grid-cols-4 md:gap-6 gap-2'>
        <div className='bg-white px-4 py-6 rounded-md text-xl shadow-lg'>
            <h3>📦 Total Orders</h3>
            <p className='font-semibold mt-2'>{cardData?.totalOrder || 0}</p>
        </div>

        <div className='bg-white px-4 py-6 rounded-md text-xl shadow-lg'>
            <h3>⏳ Pending Deliveries</h3>
            <p className='font-semibold mt-2'>{cardData?.pendingOrders || 0}</p>
        </div>

        <div className='bg-white px-4 py-6 rounded-md text-xl shadow-lg'>
            <h3>📅 Next 3 Days</h3>
            <p className='font-semibold mt-2'>{cardData?.after3DasyDelivery || 0} Orders</p>
        </div>

        <div className='bg-white px-4 py-6 rounded-md text-xl shadow-lg'>
            <h3>💰 Total Customar</h3>
            <p className='font-semibold mt-2'>{cardData?.totalCustomar || 0}</p>
        </div>
        
    </div>
  )
}

export default Card