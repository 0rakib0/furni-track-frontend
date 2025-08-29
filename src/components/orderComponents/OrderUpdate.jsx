'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function OrderUpdate({ order }) {

    const [loading, setLoading] = useState(false)
    const orderId = order?.id
    const router = useRouter()

    const [deliveryStatus, setDeliveryStatus] = useState(false);

    useEffect(() => {
        if (order?.order_status !== undefined) {
            setDeliveryStatus(order.order_status);
        }
    }, [order]);

    const handleFormSubmit = event => {
        event.preventDefault()
        setLoading(true)

        const form = event.target;
        const name = form.name.value;
        const memoNumber = form.memo_number.value;
        const phone = form.phone.value;
        const deliveryAdress = form.delivery_address.value;
        const deliveryDate = form.delivery_date.value;
        const frameShowDate = form.frame_show_date.value;
        const delivery_status = form.delivery_status.value;

        const orderFormData = new FormData()

        orderFormData.append('customar_name', name)
        orderFormData.append('memo_number', memoNumber)
        orderFormData.append('cutomar_phone', phone)
        orderFormData.append('delivery_address', deliveryAdress)
        orderFormData.append('delivery_date', deliveryDate)
        orderFormData.append('frame_show_date', frameShowDate)
        orderFormData.append('order_status', delivery_status)

        fetch(`http://127.0.0.1:8000/orders/${orderId}/`, {
            method: "PATCH",
            body: orderFormData
        })

            .then(res => res.json())
            .then(data => {
                toast.success("Order Data Successfully Updated");
                setLoading(false)
                form.reset();
                document.getElementById('UpdateOrderModal').close();
                router.push('/order-management/')
            })

            .catch((error) => {
                toast.error(error);
                setLoading(false)
            })







    }


    return (
        <div>
            <dialog id="UpdateOrderModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleFormSubmit}>
                        <div className='bg-white p-4 md:m-auto rounded-lg shadow-lg'>
                            <h3 className='text-2xl text-center '>➕Add Order</h3>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Customar Name</legend>
                                <input type="text" name='name' className="input w-full focus:outline-none" defaultValue={order?.customar_name} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Memo Number</legend>
                                <input type="text" name='memo_number' className="input w-full focus:outline-none" defaultValue={order?.memo_number} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Customar Phone</legend>
                                <input type="text" name='phone' className="input w-full focus:outline-none" defaultValue={order?.cutomar_phone} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Delivery Address</legend>
                                <input type="text" name='delivery_address' className="input w-full focus:outline-none" defaultValue={order?.delivery_address} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Delivery Date</legend>
                                <input type="date" name='delivery_date' className="input w-full focus:outline-none" defaultValue={order?.delivery_date} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg font-thin">Frame Show Date</legend>
                                <input type="date" name='frame_show_date' className="input w-full focus:outline-none" defaultValue={order?.frame_show_date} />
                            </fieldset>
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-ful border p-4">
                                <legend className="fieldset-legend">Delivery Status</legend>
                                <label className="label">
                                    <input
                                        type="checkbox"
                                        name='delivery_status'
                                        className="checkbox"
                                        checked={deliveryStatus}
                                        onChange={(e) => setDeliveryStatus(e.target.checked)}
                                    />
                                    delivered/pending
                                </label>
                            </fieldset>

                            <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>
                                {loading ? <span className="loading loading-bars loading-lg"></span> : 'Update Order'}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default OrderUpdate