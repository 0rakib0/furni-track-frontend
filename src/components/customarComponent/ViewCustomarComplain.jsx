'use client'
import React, { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { ImBin } from 'react-icons/im'
import ViewSingleComplain from './ViewSingleComplain'
import DeleteAlart from '../deleteConfirmationAlert/DeleteAlart'
import { toast } from 'react-toastify'

function ViewCustomarComplain() {
  const [loading, setLoading] = useState(false)
  const [complainData, setComplainData] = useState([])
  const [selectComplain, setSelectComplain] = useState(null)
  const [filter, setFilter] = useState('all-data')
  const [isModalOpen, setIsModalOpen] = useState(false)


  const handleComplainView = (complain) => {
    setSelectComplain(complain)
    document.getElementById('viewsinglecomplain').showModal()
  }

  const handleDeleteClick = (complain) => {
    setSelectComplain(complain);
    setIsModalOpen(true);
  }

  const handleConfirmDelete = () => {

    if (selectComplain) {
      fetch(`http://127.0.0.1:8000/customar-complain/${selectComplain.id}/`, {
        method: 'DELETE',
      })

        .then(res => res)
        .then(() => {
          toast.success("Complain Data deleted successfully")
          const afterDeleteComplain = complainData.filter(complain => complain.id !== selectComplain.id)
          setComplainData(afterDeleteComplain)
        })

        .catch(error => {
          toast.error(error.message);
        })
    }
    setIsModalOpen(false);
  }


  const handleChange = (event) => {
    const selected = event.target.value;
    setFilter(selected)
  }

  useEffect(() => {
    setLoading(true)
    fetch(`http://127.0.0.1:8000/customar-complain/?filter=${filter}`)
      .then(res => res.json())
      .then(data => {
        setComplainData(data)
        setLoading(false)
      })
  }, [filter])




  return (
    <div>
      <div className='my-6'>
        {/* filter form */}
        <div className='flex justify-between mb-2'>
          <h3 className='md:text-2xl text-xl mb-2 text-[#57c7d4]'>🧾Customar List</h3>
          <form>
            <select
              defaultValue="Pick a color"
              className="select focus:outline-none"
              onChange={handleChange}
            >

              <option value="all-data">All Complain Data</option>
              <option value="pending-data">Pending Complain Data</option>
              <option value="complate-data">Complate Complain Data</option>
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
              {
                complainData?.map((complain, index) => (
                  <tr key={complain?.id}>
                    <th>{index}</th>
                    <td>{complain?.customar_name}</td>
                    <td>{complain?.memo}</td>
                    <td>{complain?.address}</td>
                    <td>{new Date(complain?.service_date).toLocaleDateString()}</td>
                    <td>
                      <span className={`badge badge-soft ${complain?.status ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{complain?.status ? "Delivered" : "Pending"}</span>
                    </td>
                    <td>
                      <button onClick={() => handleComplainView(complain)} className="badge badge-soft badge-info mr-2"><span className='text-xl'><FaRegEye /></span>
                      </button>

                      <button onClick={() => handleDeleteClick(complain)} className="badge badge-soft text-red-400 mr-2">
                        <span><ImBin></ImBin></span>
                      </button>
                      {/* <DeleteAlart id={cuastomar.id} status='cuastomarr'></DeleteAlart> */}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <ViewSingleComplain complain={selectComplain}></ViewSingleComplain>
      <DeleteAlart
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />

    </div>
  )
}

export default ViewCustomarComplain