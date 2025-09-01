import React from 'react'

function ViewCustomar({ customar }) {
    return (
        <div>
            <dialog id="viewsinglecustomar" className="modal">
                <div className="modal-box w-96 max-w-5xl">
                    <form method="dialog">
                        {/* close button */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-xl mb-4">Customer Details</h3>

                    <div className="space-y-3">
                        {/* Name */}
                        <div className="flex justify-between">
                            <span className="font-semibold">Name:</span>
                            <span className="text-gray-700">{customar?.name}</span>
                        </div>

                        {/* Phone */}
                        <div className="flex justify-between">
                            <span className="font-semibold">Phone:</span>
                            <span className="text-gray-700">{customar?.phone}</span>
                        </div>

                        {/* Email */}
                        <div className="flex justify-between">
                            <span className="font-semibold">Email:</span>
                            <span className="text-gray-700">
                                {customar?.email || "Not Provided"}
                            </span>
                        </div>

                        {/* Address */}
                        <div>
                            <span className="font-semibold">Address:</span>
                            <p className="text-gray-700 mt-1 max-h-24 overflow-y-auto">
                                {customar?.address}
                            </p>
                        </div>

                        {/* Created Date */}
                        <div className="flex justify-between">
                            <span className="font-semibold">Added Date:</span>
                            <span className="text-gray-600 text-sm">
                                {new Date(customar?.created_at).toLocaleDateString()}
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-2">
                            <button className="btn btn-sm btn-primary">View Orders</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    )
}

export default ViewCustomar