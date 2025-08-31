'use client'
import React, { memo, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function OrderAdd() {

    const [loading, setLoading] = useState(false)
    const [dealers, setDealers] = useState([])
    const [employees, setEmployees] = useState([])
    const [customar, setCustomar] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const dealerRes = await fetch('http://127.0.0.1:8000/dealers/')
                const dealerData = await dealerRes.json()
                setDealers(dealerData)

                const employeeRes = await fetch('http://127.0.0.1:8000/employee/')
                const employeeData = await employeeRes.json()
                setEmployees(employeeData)

                const customarRes = await fetch('http://127.0.0.1:8000/customars/')
                const customarData = await customarRes.json()
                setCustomar(customarData)

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
        const customar = form.customar.value;
        const memoNumber = form.memo_number.value;
        const productTitle = form.product_title.value;
        const details = form.details.value;
        const product_pic = form.product_pic.files[0];
        const deliveryAdress = form.delivery_address.value;
        const total_price = form.total_price.value;
        const advance_payment = form.advance_payment.value;
        const deliveryDate = form.delivery_date.value;
        const next_advance_payment_date = form.next_advance_payment_date.value;
        const frameShowDate = form.frame_show_date.value;
        const dealer = form.dealer.value;
        const employee = form.employee.value;


        const orderFormData = new FormData()

        orderFormData.append('customar', customar)
        orderFormData.append('memo_number', memoNumber)
        orderFormData.append('product_name', productTitle)
        orderFormData.append('details', details)
        orderFormData.append('product_image', product_pic)
        orderFormData.append('delivery_address', deliveryAdress)
        orderFormData.append('total_price', total_price)
        orderFormData.append('advance_payment', advance_payment)
        orderFormData.append('delivery_date', deliveryDate)
        orderFormData.append('next_advance_payment_date', next_advance_payment_date)
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
                        <legend className="fieldset-legend text-lg font-thin">Select Customar</legend>
                        <select defaultValue="" name='customar' className="select w-full">
                            <option >--SELECT--</option>
                            {
                                customar.map(customar => {
                                    return <option key={customar.id} value={customar.id}>{customar.name}</option>
                                })
                            }
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Memo Number</legend>
                        <input type="text" name='memo_number' className="input w-full focus:outline-none" placeholder="Memo Number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Product Title</legend>
                        <input type="text" name='product_title' className="input w-full focus:outline-none" placeholder="Memo Number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Details</legend>
                        <textarea className="textarea h-24 w-full" name='details' placeholder="Write order details"></textarea>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Product Image</legend>
                        <input type="file" name='product_pic' className="file-input w-full" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Delivery Address</legend>
                        <input type="text" name='delivery_address' className="input w-full focus:outline-none" placeholder="Delivery Address" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Total Price</legend>
                        <input type="number" name='total_price' className="input w-full focus:outline-none" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Advance Payment</legend>
                        <input type="number" name='advance_payment' className="input w-full focus:outline-none" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Delivery Date</legend>
                        <input type="date" name='delivery_date' className="input w-full focus:outline-none" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-thin">Next Advance payment Date</legend>
                        <input type="date" name='next_advance_payment_date' className="input w-full focus:outline-none" />
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