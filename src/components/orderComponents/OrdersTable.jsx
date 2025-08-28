'use client'
import React, { useState } from 'react'
import { FaRegEye, FaPencilAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import { ImBin } from "react-icons/im";
import ViewSingleOrder from './ViewSingleOrder';
import DeleteAlart from '../deleteConfirmationAlert/DeleteAlart';
import OrderUpdate from './OrderUpdate';

function OrdersTable({ title, orders }) {
    const [ordess, setOrders] = useState(orders)
    const [selectOrder, setSelectOrder] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleViewSingleOrder = order => {
        setSelectOrder(order)
        document.getElementById('viewSingleOrder').showModal()
    }


    const handleUpdateOrder = order =>{
        setSelectOrder(order)
        document.getElementById('UpdateOrderModal').showModal();

    }


    const handleDeleteClick = (order) => {
        setSelectOrder(order)
        setIsModalOpen(true)
    }



    const handleConfirmDelete = () => {

        if (selectOrder) {
            fetch(`http://127.0.0.1:8000/orders/${selectOrder.id}/`, {
                method: 'DELETE',
            })

                .then(res => res)
                .then(() => {
                    toast.success("Order deleted successfully")
                    const afterDeleteOrder = ordess.filter(order => order.id !== selectOrder.id)
                    setOrders(afterDeleteOrder)
                })

                .catch(error => {
                    toast.error(error.message);
                    setLoading(false)
                })
        }
        setIsModalOpen(false);





    }


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
                            ordess.map(order =>
                                <tr key={order?.id}>
                                    <th>{order?.id}</th>
                                    <td>{order?.memo_number}</td>
                                    <td>{order?.customar_name}</td>
                                    <td>{order?.delivery_date}</td>
                                    <td>
                                        <span className={`badge badge-soft ${order?.order_status ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{order?.order_status ? "Delivered" : "Pending"}</span>
                                    </td>
                                    <td>
                                        <button onClick={() => handleViewSingleOrder(order)} className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                                        </button>

                                        <button onClick={() => handleDeleteClick(order)} className="badge badge-soft text-red-400 mr-2">
                                            <span><ImBin></ImBin></span>
                                        </button>

                                        <button onClick={()=> handleUpdateOrder(order)} className="badge badge-soft badge-primary mr-2">
                                            <span> <FaPencilAlt></FaPencilAlt> </span></button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <ViewSingleOrder order={selectOrder}></ViewSingleOrder>
                <DeleteAlart
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleConfirmDelete}
                >
                </DeleteAlart>
                <OrderUpdate></OrderUpdate>
            </div>
        </div>
    )
}

export default OrdersTable