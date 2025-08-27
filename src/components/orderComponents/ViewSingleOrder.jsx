import React from 'react'

function ViewSingleOrder({ order }) {

    return (
        <div>
            <dialog id="viewSingleOrder" className="modal">
                <div className="modal-box w-11/12 max-w-3xl">
                    {/* Close Button */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* Title */}
                    <h3 className="font-bold text-2xl text-center mb-4">📦 Order Details</h3>

                    {/* Order Info */}
                    <div className="space-y-3">
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold">Customer Name:</span>
                            <span className="text-gray-700">{order?.customar_name}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold">Memo Number:</span>
                            <span className="text-gray-700">{order?.memo_number}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold">Customer Phone:</span>
                            <span className="text-gray-700">{order?.cutomar_phone}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold">Delivery Address:</span>
                            <span className="text-gray-700">{order?.delivery_address}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold">Delivery Date:</span>
                            <span className="text-gray-700">{order?.delivery_date}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold">Frame Show Date:</span>
                            <span className="text-gray-700">{order?.frame_show_date}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold">Dealer:</span>
                            <span className="text-gray-700">{order?.dealer}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold">Employee:</span>
                            <span className="text-gray-700">{order?.employee}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold">Order Status:</span>
                            <span className="badge">
                                <span className={`badge badge-soft ${order.order_status ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{order.order_status ? "Delivered" : "Pending"}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ViewSingleOrder