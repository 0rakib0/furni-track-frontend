import Card from '@/components/deshbord/card'
import OrdersTable from '@/components/orderComponents/OrdersTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import RoutCard from '@/components/RoutCard/RoutCard'
import React from 'react'
import recentOrders from '../rcentorder'

async function OrderManagement() {


  const ordersDashbordDataRes = await fetch("http://127.0.0.1:8000/order-management/")
  const dashbordOrders = await ordersDashbordDataRes.json()


  
  const recentOrder = dashbordOrders.recent_order
  const upcommingDeliveryOrders = dashbordOrders.upcomming_delivery

  
  const recent_delivery_orders = await recentOrders()
  const todays_delivery_orders = recent_delivery_orders.todays_delivery
  



  
  const orderRout = [
    {name:'📝 Add Order', path:'/add-order', id:'1'},
    {name:'📄 View Orders', path:'/view-orders', id:'2'},
    {name:'📈 Orders Delivery Report', path:'/order-report', id:'3'},
    {name:'📆 Delivery Calendar', path:'/delivery-calender', id:'4'},
    {name:'🔍 Filter Orders', path:'/filter-orders', id:'5'},
    {name:'📦 Shaduled Delivery', path:'/', id:'6'},
    {name:'📄 All Order Sheet', path:'/', id:'7'},
    {name:'🔔 Delivered Orders', path:'/delivered-order', id:'8'},
  ]

  return (
    <div>
      <PageTitle></PageTitle>
      {/* all routs about  orders*/}
      <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2'>
        {
          orderRout.map(rout =><RoutCard key={rout.id} name={rout.name} path={rout.path}></RoutCard>)
        }
      </div>

        {/* todays delivery orders */}
        <OrdersTable title={"Todays Delivery Orders"} orders={todays_delivery_orders}></OrdersTable>

        {/* Recent Orders */}
        <OrdersTable title={"Recent Orders"} orders={recentOrder}></OrdersTable>

        {/* Upcomming delivery Orders */}
        <OrdersTable title={"Upcomming Delivery Orders"} orders={upcommingDeliveryOrders}></OrdersTable>
    </div>
  )
}

export default OrderManagement