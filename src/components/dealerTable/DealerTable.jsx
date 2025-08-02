import Link from 'next/link'
import React from 'react'

function DealerTable() {
  return (
    <div>
        <div className='my-6'>
            <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾 Dealer List</h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Dealer ID</th>
                            <th>Dealer Name</th>
                            <th>Contact Number</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>DL982983</td>
                            <td>Ajom Ali</td>
                            <td>01473784673</td>
                            <td>North Badda, Satarkul</td>
                            <td>
                                <span className="badge badge-soft badge-primary mr-2"><Link href="">View</Link></span>
                                <span className="badge badge-soft badge-warning"><Link href="">Delete</Link></span>
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>DL982984</td>
                            <td>Kamal Khondorkar</td>
                            <td>01373784673</td>
                            <td>North Badda, Satarkul</td>
                            <td>
                                <span className="badge badge-soft badge-primary mr-2"><Link href="">View</Link></span>
                                <span className="badge badge-soft badge-warning"><Link href="">Delete</Link></span>
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>DL982983</td>
                            <td>Ajom Ali</td>
                            <td>01473784673</td>
                            <td>North Badda, Satarkul</td>
                            <td>
                                <span className="badge badge-soft badge-primary mr-2"><Link href="">View</Link></span>
                                <span className="badge badge-soft badge-warning"><Link href="">Delete</Link></span>
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>DL982983</td>
                            <td>Ajom Ali</td>
                            <td>01473784673</td>
                            <td>North Badda, Satarkul</td>
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

export default DealerTable