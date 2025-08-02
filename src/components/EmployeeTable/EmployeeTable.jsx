import Link from 'next/link'
import React from 'react'

function EmployeeTable() {
    return (
        <div>
            <div className='my-6'>
                <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Employee List</h3>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Contact Number</th>
                                <th>Position</th>
                                <th>Join Date</th>
                                <th>Performance Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>DL982983</td>
                                <td>Rakibul Hasan</td>
                                <td>01473784673</td>
                                <td>Sale Man</td>
                                <td>01-01-2024</td>
                                <td>
                                    <span className="badge badge-soft badge-primary">Good</span>
                                </td>
                                <td>
                                    <span className="badge badge-soft badge-primary mr-2"><Link href="">View</Link></span>
                                    <span className="badge badge-soft badge-warning"><Link href="">Delete</Link></span>
                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>DL982983</td>
                                <td>Rakibul Hasan</td>
                                <td>01473784673</td>
                                <td>Sale Man</td>
                                <td>01-01-2024</td>
                                <td>
                                    <span className="badge badge-soft badge-primary">Good</span>
                                </td>
                                <td>
                                    <span className="badge badge-soft badge-primary mr-2"><Link href="">View</Link></span>
                                    <span className="badge badge-soft badge-warning"><Link href="">Delete</Link></span>
                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>DL982983</td>
                                <td>Rakibul Hasan</td>
                                <td>01473784673</td>
                                <td>Sale Man</td>
                                <td>01-01-2024</td>
                                <td>
                                    <span className="badge badge-soft badge-warning">Poor</span>
                                </td>
                                <td>
                                    <span className="badge badge-soft badge-primary mr-2"><Link href="">View</Link></span>
                                    <span className="badge badge-soft badge-warning"><Link href="">Delete</Link></span>
                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>DL982983</td>
                                <td>Rakibul Hasan</td>
                                <td>01473784673</td>
                                <td>Sale Man</td>
                                <td>01-01-2024</td>
                                <td>
                                    <span className="badge badge-soft badge-primary">Good</span>
                                </td>
                                <td>
                                    <span className="badge badge-soft badge-primary mr-2"><Link href="">View</Link></span>
                                    <span className="badge badge-soft badge-warning"><Link href="">Delete</Link></span>
                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>DL982983</td>
                                <td>Rakibul Hasan</td>
                                <td>01473784673</td>
                                <td>Sale Man</td>
                                <td>01-01-2024</td>
                                <td>
                                    <span className="badge badge-soft badge-info">Need Practice</span>
                                </td>
                                <td>
                                    <span className="badge badge-soft badge-primary mr-2"><Link href="">View</Link></span>
                                    <span className="badge badge-soft badge-warning"><Link href="">Delete</Link></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTable