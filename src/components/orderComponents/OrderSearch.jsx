'use client'
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function OrderSearch() {

    const handleSearch = (event) => {
        event.preventDefault()
        const searchValue = event.target.search.value;
        console.log(searchValue)
    }


    return (
        <div>
            <form onSubmit={handleSearch}>
                <label className="input">
                    <input type="search" className='outline-none' name='search' required placeholder="Order search by memo or phone" />
                    <button><IoSearchOutline /></button>
                </label>
            </form>
        </div>
    )
}

export default OrderSearch