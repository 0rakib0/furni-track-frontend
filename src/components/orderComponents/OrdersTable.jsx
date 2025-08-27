import React from 'react'

function OrdersTable({ title, orders }) {



    return (
        <div className='my-6'>
            <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>{title}</h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Memo</th>
                            <th>Customar Name</th>
                            <th>Delivery Date</th>
                            <th>Order Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => 
                                <tr key={order.id}>
                                    <th>{order.id}</th>
                                    <td>{order.memo_number}</td>
                                    <td>{order.customar_name}</td>
                                    <td>{order.delivery_date}</td>
                                    <span className={`badge badge-soft ${order.order_status ? 'bg-green-500 text-white' :'bg-red-500 text-white'}`}>{order.order_status ? "Delivered":"Pending"}</span>
                                    <td>Blue</td>
                                </tr>
                            )
                        }
                
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrdersTable