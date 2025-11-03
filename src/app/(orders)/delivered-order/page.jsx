import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import OrderWappers from '../OrderWappers'

async function DeliveredOrder() {

    const orderResponse = await fetch('http://127.0.0.1:8000/delivered-order/')
    const orders = await orderResponse.json()

    return (
        <div>
            <PageTitle></PageTitle>
            <OrderWappers initialorder={orders}></OrderWappers>
        </div>
    )
}

export default DeliveredOrder