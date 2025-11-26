import DealerTable from '@/components/dealerComponents/dealerTable/DealerTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import DealerData from '../DealerData'

async function ViewDealer() {

  const dealers = await DealerData()
  

  return (
    <div>
        <PageTitle></PageTitle>
        <DealerTable dealers={dealers}></DealerTable>
        
    </div>
  )
}

export default ViewDealer