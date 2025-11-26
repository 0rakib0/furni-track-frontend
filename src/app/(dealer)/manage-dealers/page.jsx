import OrdersTable from '@/components/orderComponents/OrdersTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import RoutCard from '@/components/RoutCard/RoutCard'
import React from 'react'
import DealerData from '../DealerData'
import DealerTable from '@/components/dealerComponents/dealerTable/DealerTable'

async function ManageDealer() {

    const dealers = await DealerData()

    const dealerRout = [
    {name:'📝 Add Dealer', path:'/add-dealer', id:'1'},
    {name:'📄 View Dealer', path:'/view-dealer', id:'2'},
    {name:'📆 Dealer Payment', path:'/dealer-payment', id:'3'},
    {name:'📈 Dealer Payment Report', path:'/dealer-payment-report', id:'4'},
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

        <DealerTable dealers={dealers}></DealerTable>
    </div>
  )
}

export default ManageDealer