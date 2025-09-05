'use client'
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";

function OrderSearch({ setOrders }) {
    const [loading, setLoading] = useState(false)
    

    const handleSearch = async (event) => {
        event.preventDefault()
        const form = event.target;
        const searchValue = form.search.value;
        setLoading(true)
        const res = await fetch(`http://127.0.0.1:8000/order-search/?order-search=${searchValue}`)
        const orders = await res.json()
        setOrders(orders)
        setLoading(false)
        form.reset();
    }


    return (
        <div>
            <form onSubmit={handleSearch}>
                <label className="input">
                    <input type="search" className='outline-none' name='search' required placeholder="Order search by memo or phone" />
                    <button>{loading ? <span className="loading loading-spinner loading-md"></span> : <IoSearchOutline /> }</button>
                </label>
            </form>
        </div>
    )
}

export default OrderSearch