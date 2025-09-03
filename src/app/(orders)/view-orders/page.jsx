
import OrderSearch from '@/components/orderComponents/OrderSearch';
import OrdersTable from '@/components/orderComponents/OrdersTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
async function ViewOrders() {

  const orderResponse = await fetch('http://127.0.0.1:8000/orders/')
  const orders = await orderResponse.json()


  return (
    <div>
      <PageTitle></PageTitle>
      <div>
        <OrderSearch></OrderSearch>
      </div>
      <OrdersTable title={"🧾Total Orders"} orders={orders}></OrdersTable>
    </div>
  )
}

export default ViewOrders