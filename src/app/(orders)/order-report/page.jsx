import BarChart from '@/components/BarChart/BarChart'
import OrdersTable from '@/components/orderComponents/OrdersTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import recentOrders from '../rcentorder'

async function OrderReport() {
  const recentDeliveryOrders = await recentOrders()
  const todays_delivery = recentDeliveryOrders.todays_delivery
  const tomorrow_delivery_orders = recentDeliveryOrders.tomorrow_delivery_orders
  const after_three_days_delivery_order = recentDeliveryOrders.after_three_days_delivery_order
  return (
    <div>
      <PageTitle></PageTitle>


      {/* todays delivery orders */}
      <OrdersTable title={"Todays Delivery Orders"} orders={todays_delivery}></OrdersTable>

      {/* tomorrow delivery orders */}
      <OrdersTable title={"Tomorrow Delivery Orders"} orders={tomorrow_delivery_orders}></OrdersTable>
      {/* tomorrow delivery orders */}
      <OrdersTable title={"After 3 days Delivery Orders"} orders={after_three_days_delivery_order}></OrdersTable>

      <div className='grid md:grid-cols-2 border border-[#57c7d4] rounded-lg gap-4 p-4'>
        <div>
          <p className='mb-4 text-xl text-[#57c7d4]'>Monthly Order Chart Report</p>
          <BarChart></BarChart>
        </div>
      </div>
    </div>
  )
}

export default OrderReport