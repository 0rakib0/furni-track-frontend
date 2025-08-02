import OrdersTable from '@/components/orders_Table/OrdersTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import RoutCard from '@/components/RoutCard/RoutCard'
import React from 'react'

function ManageDealer() {


    const dealerRout = [
    {name:'📝 Add Dealer', path:'/add-dealer', id:'1'},
    {name:'📄 View Dealer', path:'/view-dealer', id:'2'},
    {name:'📈 Dealer Payment Report', path:'/', id:'3'},
    {name:'📆 Dealer Payment', path:'/', id:'4'},
  ]


  return (
    <div>
        <PageTitle></PageTitle>
      {/* all routs about  orders*/}
      <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2'>
        {
          dealerRout.map(rout =><RoutCard key={rout.id} name={rout.name} path={rout.path}></RoutCard>)
        }
      </div>

        {/* Pending Orders */}

        <OrdersTable title="🧾All Dealers"></OrdersTable>
    </div>
  )
}

export default ManageDealer