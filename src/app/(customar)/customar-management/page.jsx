import PageTitle from '@/components/PageTitle/PageTitle'
import RoutCard from '@/components/RoutCard/RoutCard'
import React from 'react'

function CustomarManagement() {


    const customarRout = [
        { name: '📝 Add Customar', path: '/add-customar', id: '1' },
    ]

    return (
        <div>
            <PageTitle></PageTitle>
            {/* all routs about  orders*/}
            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2'>
                {
                    customarRout.map(rout => <RoutCard key={rout.id} name={rout.name} path={rout.path}></RoutCard>)
                }
            </div>

            {/* Pending Orders */}

            {/* <OrdersTable title="🧾All Dealers"></OrdersTable> */}
        </div>
    )
}

export default CustomarManagement