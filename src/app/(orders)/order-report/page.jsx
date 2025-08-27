import BarChart from '@/components/BarChart/BarChart'
import OrdersTable from '@/components/orderComponents/OrdersTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

function OrderReport() {
  return (
    <div>
        <PageTitle></PageTitle>
         
         <div className='grid md:grid-cols-2 border border-[#57c7d4] rounded-lg gap-4 p-4'>
            <div>
                <p className='mb-4 text-xl text-[#57c7d4]'>Order Delivery Chart</p>
                <BarChart></BarChart>
            </div>
            <div>
                <p className='mb-4 text-xl text-[#57c7d4]'>Order Payment Chart</p>
                <BarChart></BarChart>
            </div>
         </div>
         <OrdersTable title={'🚚🕒All Orders List'}></OrdersTable>
    </div>
  )
}

export default OrderReport