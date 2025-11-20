import React from 'react'
import { toast } from 'react-toastify';

function ViewSingleComplain({ complain }) {


    const handleMarkComplete = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/customar-complain/${complain.id}/`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: true })
            });

            if (res.ok) {
                toast.success("Complain marked as completed!");
                document.getElementById('viewsinglecomplain').close()
            } else {
                toast.error("Failed to update complain!");
            }

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <dialog id="viewsinglecomplain" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box rounded-2xl shadow-xl">
                    {complain ? (
                        <>
                            {/* Title */}
                            <h3 className="font-bold text-2xl mb-4 text-[#57c7d4] border-b pb-2">
                                🛠 Customer Complain Details
                            </h3>

                            {/* Problem Picture */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={`http://127.0.0.1:8000/${complain.problem_pic}`}
                                    alt={complain.title}
                                    className=" object-cover rounded-xl border-4 border-[#57c7d4] shadow-md"
                                />
                            </div>

                            {!complain.status && (
                                <button
                                    onClick={() => handleMarkComplete(complain.id)}
                                    className="px-4 py-2 text-white bg-[#57c7d4] hover:bg-[#42b3c0] rounded-lg shadow-md transition"
                                >
                                    Mark to Complete
                                </button>
                            )}

                            {/* Complain Details */}
                            <div className="space-y-2 text-gray-700 text-[17px]">
                                <p><strong className="text-[#57c7d4]">Name:</strong> {complain.customar_name}</p>
                                <p><strong className="text-[#57c7d4]">Phone:</strong> {complain.phone}</p>
                                <p><strong className="text-[#57c7d4]">Address:</strong> {complain.address}</p>
                                <p><strong className="text-[#57c7d4]">Title:</strong> {complain.title}</p>
                                <p><strong className="text-[#57c7d4]">Memo:</strong> {complain.memo}</p>

                                <p>
                                    <strong className="text-[#57c7d4]">Problem Details:</strong>
                                    <span className="block mt-1 bg-gray-50 p-3 rounded-lg shadow-sm">{complain.problem_details}</span>
                                </p>

                                <p><strong className="text-[#57c7d4]">Service Date:</strong> {new Date(complain.service_date).toLocaleDateString()}</p>

                                <p><strong className="text-[#57c7d4]">Status:</strong>
                                    {complain.status ? (
                                        <span className="text-green-600 font-semibold">✔ Completed</span>
                                    ) : (
                                        <span className="text-red-500 font-semibold">✘ Pending</span>
                                    )}
                                </p>

                                <p><strong className="text-[#57c7d4]">Created At:</strong> {new Date(complain.create_at).toLocaleDateString()}</p>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-gray-500">No complain selected</p>
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

export default ViewSingleComplain