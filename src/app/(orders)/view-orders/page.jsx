import OrderSearch from '@/components/orderComponents/OrderSearch';
import OrdersTable from '@/components/orderComponents/OrdersTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import OrderWappers from '../OrderWappers';
async function ViewOrders() {

  

  
  const orderResponse = await fetch('http://127.0.0.1:8000/orders/')
  const orders = await orderResponse.json()


  return (
    <div>
      <PageTitle></PageTitle>
      <OrderWappers initialorder={orders}></OrderWappers>
    </div>
  )
}

export default ViewOrders