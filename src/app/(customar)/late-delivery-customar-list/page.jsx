import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

async function LateDeliveryCustomar() {

    const lateDeliveryDateRes = await fetch('http://127.0.0.1:8000/late-delivery-orders/')
    const lateDeliveryDate = await lateDeliveryDateRes.json()


    return (
        <div>
            <PageTitle></PageTitle>
            <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Late Delivery Customar List</h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Memo</th>
                                <th>Exact Delivery Date</th>
                                <th>Late Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lateDeliveryDate.map(order => {
                                    const deliveryDate = new Date(order?.delivery_date)
                                    const initialDate = new Date(order?.initial_dalivery_date)

                                    const diffDays = Math.ceil(
                                        Math.abs(deliveryDate - initialDate) / (1000 * 60 * 60 * 24)
                                    );

                                    return <tr key={order?.id}>
                                        <th>{order?.id}</th>
                                        <td>{order?.customar?.name}</td>
                                        <td>{order?.memo_number}</td>
                                        <td>{order?.delivery_date}</td>
                                        <td className={`badge badge-soft mt-2 ${diffDays > 5 ? 'text-red-400':'text-black'} mr-2`}>{diffDays}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default LateDeliveryCustomar