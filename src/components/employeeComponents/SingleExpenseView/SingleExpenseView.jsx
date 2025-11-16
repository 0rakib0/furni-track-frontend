import React from 'react'

function SingleExpenseView({ singleExpenceData }) {
    return (
        <>
            <dialog id="view_single_expense" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box rounded-2xl shadow-xl">
                    {singleExpenceData ? (
                        <>
                            <h3 className="font-bold text-2xl mb-6 text-[#57c7d4] border-b pb-3">
                                🧾 Expense Information
                            </h3>

                            {/* Expense Info */}
                            <div className="space-y-4 text-gray-700">

                                {/* Employee */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Employee</p>
                                    <p className="font-semibold">
                                        {singleExpenceData?.employee?.name || "Employee Not Found"}
                                    </p>
                                </div>

                                {/* Expense Title */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Expense Title</p>
                                    <p className="font-semibold">{singleExpenceData?.expense_title}</p>
                                </div>

                                {/* Expense Category */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Expense Category</p>
                                    <p className="font-semibold">{singleExpenceData?.expenses_category}</p>
                                </div>

                                {/* Amount */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Amount</p>
                                    <p className="font-semibold text-green-600">
                                        {singleExpenceData?.amount} ৳
                                    </p>
                                </div>

                                {/* Approved By */}
                                <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <p className="text-sm text-gray-500">Approved By</p>
                                    <p className="font-semibold">{singleExpenceData?.approved_by}</p>
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

export default SingleExpenseView