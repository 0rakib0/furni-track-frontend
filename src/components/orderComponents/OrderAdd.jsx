'use client'
import React, { memo, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function OrderAdd() {

    const [loading, setLoading] = useState(false)
    const [dealers, setDealers] = useState([])
    const [employees, setEmployees] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const dealerRes = await fetch('http://127.0.0.1:8000/dealers/')
                const dealerData = await dealerRes.json()
                setDealers(dealerData)

                const employeeRes = await fetch('http://127.0.0.1:8000/employee/')
                const employeeData = await employeeRes.json()
                setEmployees(employeeData)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])



    const handleFormSubmit = event => {
        event.preventDefault()
        setLoading(true)

        const form = event.target;
        const name = form.name.value;
        const memoNumber = form.memo_number.value;
        const phone = form.phone.value;
        const deliveryAdress = form.delivery_address.value;
        const deliveryDate = form.delivery_date.value;
        const frameShowDate = form.frame_show_date.value;
        const dealer = form.dealer.value;
        const employee = form.employee.value;

        const orderFormData = new FormData()

        orderFormData.append('customar_name', name)
        orderFormData.append('memo_number', memoNumber)
        orderFormData.append('cutomar_phone', phone)
        orderFormData.append('delivery_address', deliveryAdress)
        orderFormData.append('delivery_date', deliveryDate)
        orderFormData.append('frame_show_date', frameShowDate)
        orderFormData.append('dealer', dealer)
        orderFormData.append('employee', employee)

        fetch('http://127.0.0.1:8000/orders/', {
            method: "POST",
            body: orderFormData
        })

            .then(res => res.json())
            .then(data => {
                toast.success("Order Data Successfully added");
                setLoading(false)
                form.reset();
            })

            .catch((error) => {
                toast.error(error);
                setLoading(false)
            })







    }



    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className='bg-white p-4 md:w-3/4 md:m-auto rounded-lg shadow-lg'>
                    <h3 className='text-2xl text-center '>➕Add Order</h3>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Customar Name</legend>
                        <input type="text" name='name' className="input w-full focus:outline-none" placeholder="Customar Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Memo Number</legend>
                        <input type="text" name='memo_number' className="input w-full focus:outline-none" placeholder="Memo Number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Customar Phone</legend>
                        <input type="text" name='phone' className="input w-full focus:outline-none" placeholder="Cusatomar phone number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Delivery Address</legend>
                        <input type="text" name='delivery_address' className="input w-full focus:outline-none" placeholder="Delivery Address" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Delivery Date</legend>
                        <input type="date" name='delivery_date' className="input w-full focus:outline-none" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Frame Show Date</legend>
                        <input type="date" name='frame_show_date' className="input w-full focus:outline-none" placeholder="Frame Show Date" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Select Dealer</legend>
                        <select defaultValue="" name='dealer' className="select w-full">
                            <option >--SELECT--</option>
                            {
                                dealers.map(dealer => {
                                    return <option key={dealer.id} value={dealer.id}>{dealer.name}</option>
                                })
                            }
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Select Employee</legend>
                        <select defaultValue="" name='employee' className="select w-full">
                            <option >--SELECT--</option>
                            {
                                employees.map(employee => {
                                    return <option key={employee.id} value={employee.id}>{employee.name}</option>
                                })
                            }
                        </select>
                    </fieldset>
                    {/* <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-ful border p-4">
                        <legend className="fieldset-legend">Delivery Status</legend>
                        <label className="label">
                            <input type="checkbox" name='delivery_status' defaultChecked className="checkbox" />
                            delivered/pending
                        </label>
                    </fieldset> */}
                    <button type='submit' className='w-full py-3 rounded-md text-white hover:bg-white hover:border hover:text-[#57c7d4] bg-[#57c7d4] transition duration-300 ease-in-out my-4'>Add Order</button>
                </div>
            </form>
        </div>
    )
}

export default OrderAdd