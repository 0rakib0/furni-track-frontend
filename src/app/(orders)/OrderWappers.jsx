"use client"
import OrderSearch from '@/components/orderComponents/OrderSearch'
import OrdersTable from '@/components/orderComponents/OrdersTable'
import React, { useState } from 'react'

function OrderWappers({ initialorder }) {
    const [orders, setOrders] = useState(initialorder)
    console.log(orders)
    return (
        <div>
            <div>
                <OrderSearch setOrders={setOrders}></OrderSearch>
            </div>
            <OrdersTable title={"🧾Total Orders"} orders={orders}></OrdersTable>
        </div>
    )
}

export default OrderWappers