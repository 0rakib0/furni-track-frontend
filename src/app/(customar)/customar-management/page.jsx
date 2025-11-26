import PageTitle from '@/components/PageTitle/PageTitle'
import RoutCard from '@/components/RoutCard/RoutCard'
import React from 'react'
import CustomarData from '../CustomarData'
import CustomarTable from '@/components/customarComponent/CustomarTable'

async function CustomarManagement() {


    const customarRout = [
        { name: '📝 Add Customar', path: '/add-customar', id: '1' },
        { name: '📄 View Customar', path: '/view-customar', id: '2' },
        { name: '🔍 Send Offer Mails', path: '/send-offer-mail', id: '3' },
        { name: '📆 Late Delivery Customar', path: '/late-delivery-customar-list', id: '4' },
        { name: '➕ Add Customar complain', path: '/add-complain', id: '5' },
        { name: '📄 Customar Complain List', path: '/complain-list', id: '6' },
        { name: '📄 After 3 days service Date', path: '/late-delivery-customar-list', id: '7' },
    ]

    const customars = await CustomarData()

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

            <CustomarTable customars={customars}></CustomarTable>
        </div>
    )
}

export default CustomarManagement