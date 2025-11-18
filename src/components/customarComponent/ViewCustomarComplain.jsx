'use client'
import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { ImBin } from 'react-icons/im'

function ViewCustomarComplain() {
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <div className='my-6'>
        {/* filter form */}
        <div className='flex justify-between mb-2'>
          <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Customar List</h3>
          <form>
            <select defaultValue="Pick a color" className="select focus:outline-none">
              <option>All Complain Data</option>
              <option>Pending Complain Data</option>
              <option>Complate Complain Data</option>
            </select>
          </form>
        </div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Customar Name</th>
                <th>Memo</th>
                <th>Address</th>
                <th>Service Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>3</th>
                <td>Rakib</td>
                <td>2020</td>
                <td>Mohakhali, Dhaka</td>
                <td>24-11-2025</td>
                <td>
                  <span className="badge badge-soft bg-green-500 text-white">Complate</span>
                </td>
                {/* <td>
                  {customar.address?.length > 20
                    ? customar.address.slice(0, 20) + "..."
                    : customar.address}
                    Dhaka, Mohakhali-1212
                </td> */}
                <td>
                  <button className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                  </button>

                  <button className="badge badge-soft text-red-400 mr-2">
                    <span><ImBin></ImBin></span>
                  </button>
                  {/* <DeleteAlart id={cuastomar.id} status='cuastomarr'></DeleteAlart> */}
                </td>
              </tr>

              <tr>
                <th>4</th>
                <td>Rakib</td>
                <td>2020</td>
                <td>Mohakhali, Dhaka</td>
                <td>24-11-2025</td>
                <td>
                  <span className="badge badge-soft bg-red-500 text-white">Pending</span>
                </td>
                {/* <td>
                  {customar.address?.length > 20
                    ? customar.address.slice(0, 20) + "..."
                    : customar.address}
                    Dhaka, Mohakhali-1212
                </td> */}
                <td>
                  <button className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                  </button>

                  <button className="badge badge-soft text-red-400 mr-2">
                    <span><ImBin></ImBin></span>
                  </button>
                  {/* <DeleteAlart id={cuastomar.id} status='cuastomarr'></DeleteAlart> */}
                </td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>
      {/* <ViewCustomar customar={selectCustomar}></ViewCustomar>
      <DeleteAlart
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      /> */}
    </div>
  )
}

export default ViewCustomarComplain