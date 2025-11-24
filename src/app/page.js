import Card from "@/components/deshbord/card";
import OrdersTable from "@/components/orderComponents/OrdersTable";
import Image from "next/image";

async function Home() {


  const dashbordResponse = await fetch('http://127.0.0.1:8000/home-dashbord-data/')
  const dashbordData = await dashbordResponse.json()
  const after3DasyDelivery = dashbordData?.After3days_delivery_order.length
  console.log(after3DasyDelivery)
  const card = {
    'totalOrder':dashbordData.total_order,
    'pendingOrders':dashbordData.pending_orders,
    'totalCustomar':dashbordData.total_customar,
    'after3DasyDelivery':after3DasyDelivery
  }

  return (
    <div className="">
      <div className="my-8">
        <h3 className="text-2xl">👋 Welcome, Admin</h3>
        <p>Here is your furniture order overview.</p>
      </div>
      <div>
        <Card cardData = {card}></Card>
        {/* recently orderd item product */}
        <div className="my-8">
          <OrdersTable title={"Todays Orders"} orders={dashbordData.todays_orders}></OrdersTable>
        </div>
        <div className="my-8">
          <OrdersTable title={"Todays Delivery Orders"} orders={dashbordData.todays_delivery_order}></OrdersTable>
        </div>

        <div className="my-8">
          <OrdersTable title={"Tomorrow Delivery Orders"} orders={dashbordData.tomorrow_delivery_order}></OrdersTable>
        </div>
        <div className="my-8">
          <OrdersTable title={"After 3 days Delivery Orders"} orders={dashbordData.After3days_delivery_order}></OrdersTable>
        </div>
        {/* Up Comming Delivery Order */}
        {/* <OrdersTable title={'🚚🕒Up-Comming Delivery Order'}></OrdersTable> */}
      </div>
    </div>
  );
}

export default Home