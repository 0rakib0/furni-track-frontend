import React from 'react'

function ViewSingleOrder({ order }) {

    return (
        <div>
            <dialog id="viewSingleOrder" className="modal">
                <div className="modal-box w-11/12 max-w-3xl p-8 bg-white rounded-lg shadow-xl border border-gray-300">
                    {/* Close Button */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* Header */}
                    <div className="text-center border-b pb-4 mb-6">
                        <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-800">
                            DreamLux Furnished
                        </h2>
                        <p className="text-sm text-gray-500">📦 Order Memo</p>
                    </div>

                    {/* Order Info */}
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="font-semibold">Customer Name:</span>
                            <span>{order?.customar?.name}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Memo Number:</span>
                            <span className="font-mono">{order?.memo_number}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Customer Phone:</span>
                            <span>{order?.customar?.phone}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Delivery Address:</span>
                            <span className="max-w-[60%] text-right">{order?.delivery_address}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Product:</span>
                            <span>{order?.product_name}</span>
                        </div>

                        {order?.details && (
                            <div className="flex justify-between">
                                <span className="font-semibold">Details:</span>
                                <span className="max-w-[60%] text-right">{order?.details}</span>
                            </div>
                        )}
                    </div>

                    {/* Price Section */}
                    <div className="border-t border-b py-3 mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="font-semibold">Total Price:</span>
                            <span>৳ {order?.total_price}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Advance Payment:</span>
                            <span>৳ {order?.advance_payment}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-gray-800">
                            <span>Due Amount:</span>
                            <span>
                                ৳ {(parseFloat(order?.total_price || 0) - parseFloat(order?.advance_payment || 0)).toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="font-semibold">Delivery Date:</span>
                            <span>{order?.delivery_date}</span>
                        </div>
                        {order?.frame_show_date && (
                            <div className="flex justify-between">
                                <span className="font-semibold">Frame Show Date:</span>
                                <span>{order?.frame_show_date}</span>
                            </div>
                        )}
                    </div>

                    {/* Dealer & Employee */}
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="font-semibold">Dealer:</span>
                            <span>{order?.dealer?.name || order?.dealer}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Employee:</span>
                            <span>{order?.employee?.name || order?.employee}</span>
                        </div>
                    </div>

                    {/* Status */}
                    <div className="flex justify-between items-center border-t pt-3 mt-6">
                        <span className="font-semibold">Order Status:</span>
                        <span
                            className={`px-4 py-1 rounded-md text-white text-sm font-medium ${order?.order_status === "delivered"
                                    ? "bg-green-500"
                                    : order?.order_status === "on_hold"
                                        ? "bg-yellow-500"
                                        : order?.order_status === "canceled"
                                            ? "bg-red-500"
                                            : "bg-gray-500"
                                }`}
                        >
                            {order?.order_status ? order?.order_status.toUpperCase() : "Pending"}
                        </span>
                    </div>

                    {/* Footer */}
                    <div className="text-center border-t mt-6 pt-4 text-xs text-gray-500">
                        Thank you for choosing <strong>DreamLux Furnished</strong>.
                        <br /> This is a system-generated memo.
                    </div>
                </div>
            </dialog>

        </div>
    )
}

export default ViewSingleOrder