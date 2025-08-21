"use client"
import React from 'react'

function SingleDealerView({ dealer }) {

    console.log(dealer)
    return (
        <>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box rounded-2xl shadow-xl">
                    {dealer ? (
                        <>
                            {/* Title */}
                            <h3 className="font-bold text-2xl mb-4 text-[#57c7d4] border-b pb-2">
                                🧾 Dealer Information
                            </h3>

                            {/* Dealer Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={dealer.dealer_image}
                                    alt={dealer.name}
                                    className="w-32 h-32 object-cover rounded-full border-4 border-[#57c7d4] shadow-md"
                                />
                            </div>

                            {/* Dealer Details */}
                            <div className="space-y-2 text-gray-700">
                                <p><strong className="text-[#57c7d4]">ID:</strong> {dealer.id}</p>
                                <p><strong className="text-[#57c7d4]">Name:</strong> {dealer.name}</p>
                                <p><strong className="text-[#57c7d4]">Age:</strong> {dealer.age}</p>
                                <p><strong className="text-[#57c7d4]">Phone:</strong> {dealer.phone}</p>
                                <p><strong className="text-[#57c7d4]">Address:</strong> {dealer.address}</p>
                                <p><strong className="text-[#57c7d4]">Created At:</strong> {new Date(dealer.created_at).toLocaleDateString()}</p>
                                <p><strong className="text-[#57c7d4]">Updated At:</strong> {new Date(dealer.updated_at).toLocaleDateString()}</p>
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

export default SingleDealerView