"use client"
import React from 'react'

function SingleDealerPaymentView({ paymentData }) {

    return (
        <>
            <dialog id="dealer_payment_view" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box rounded-2xl shadow-xl">
                    {paymentData ? (
                        <>
                            <h3 className="font-bold text-2xl mb-6 text-[#57c7d4] border-b pb-3">
                                💳 Payment Information
                            </h3>

                            {/* Payment Info */}
                            <div className="space-y-4 text-gray-700">

                                {/* Dealer */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Dealer</p>
                                    <p className="font-semibold">
                                        {paymentData?.dealer?.name || "Dealer Not Found"}
                                    </p>
                                </div>

                                {/* Ref Memo */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Reference Memo</p>
                                    <p className="font-semibold">{paymentData?.ref_memo || "N/A"}</p>
                                </div>

                                {/* Payment Method */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Payment Method</p>
                                    <p className="font-semibold">{paymentData?.payment_method}</p>
                                </div>

                                {/* Amount */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Amount</p>
                                    <p className="font-semibold text-green-600">{paymentData?.amount} ৳</p>
                                </div>

                                {/* Created At */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Payment Date</p>
                                    <p className="font-semibold">
                                        {new Date(paymentData?.created_at).toLocaleDateString()}
                                    </p>
                                </div>

                            </div>
                        </>
                    ) : (
                        <p className="text-center text-gray-500">No dealer selected</p>
                    )}

                    {/* Action */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-[#57c7d4] text-white hover:bg-[#45b6c2] px-6 rounded-full">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default SingleDealerPaymentView