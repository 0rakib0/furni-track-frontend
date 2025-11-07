import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

function LateDeliveryCustomar() {
    return (
        <div>
            <PageTitle></PageTitle>
            <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Late Delivery Customar List</h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Memo</th>
                                <th>Exact Delivery Date</th>
                                <th>Late Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Kamal</td>
                                <td>918</td>
                                <td>11-02-2025</td>
                                <td className="badge badge-soft text-red-400 mr-2">6 days</td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Kamal</td>
                                <td>918</td>
                                <td>11-02-2025</td>
                                <td>4 days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default LateDeliveryCustomar