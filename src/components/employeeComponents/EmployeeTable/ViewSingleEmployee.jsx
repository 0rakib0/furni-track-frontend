'use client'
import React from 'react'

function ViewSingleEmployee({ employee }) {
    return (
        <div>
            <dialog id="EmployeeViewModal" className="modal">
                <div className="modal-box max-w-2xl">
                    {/* Close Button */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* Title */}
                    <h3 className="font-bold text-2xl text-center mb-4">👨‍💼 Employee Details</h3>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Employee Image */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <img
                                src={employee?.employee_image}
                                alt={employee?.name}
                                className="w-32 h-32 object-cover rounded-full border-4 border-[#57c7d4] shadow-lg"
                            />
                        </div>

                        {/* Employee Info */}
                        <div className="w-full md:w-2/3 space-y-3">
                            <p><span className="font-semibold">Name:</span> {employee?.name}</p>
                            <p><span className="font-semibold">Age:</span> {employee?.age}</p>
                            <p><span className="font-semibold">Phone:</span> {employee?.phone}</p>
                            <p><span className="font-semibold">Position:</span> {employee?.position}</p>
                            <p><span className="font-semibold">Join Date:</span> {employee?.join_date}</p>
                            <p><span className="font-semibold">Performance:</span>
                                <span className={`ml-2 px-2 py-1 rounded-full text-sm 
                                ${employee?.performance_status === "Best" ? "bg-green-500 text-white" :
                                        employee?.performance_status === "Better" ? "bg-blue-500 text-white" :
                                            employee?.performance_status === "Good" ? "bg-yellow-400 text-black" :
                                                "bg-red-500 text-white"}`}>
                                    {employee?.performance_status}
                                </span>
                            </p>
                            <p><span className="font-semibold">Address:</span> {employee?.address}</p>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ViewSingleEmployee