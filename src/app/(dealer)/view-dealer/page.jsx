import DealerTable from '@/components/dealerComponents/dealerTable/DealerTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

async function ViewDealer() {

  const data = await fetch('http://127.0.0.1:8000/dealers/')
  const dealers = await data.json()

  

  return (
    <div>
        <PageTitle></PageTitle>
        <DealerTable dealers={dealers}></DealerTable>
        
    </div>
  )
}

export default ViewDealer