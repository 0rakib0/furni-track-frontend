import React from 'react'

function SendMail({ customars }) {


    return (
        <div>
            <div className="overflow-x-auto">
                <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Customar List</h3>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>
                                    Select
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                customars.map(customar => {
                                    return <tr key={customar.id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <div className="font-bold">{customar.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {customar.email}
                                        </td>
                                        <td>{customar.phone}</td>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SendMail