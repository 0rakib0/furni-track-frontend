"use client";
import React, { useState } from "react";
import OrderWappers from "../OrderWappers";

export default function OrderFilterClient({ orders }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const handleFilter = () => {
    if (!startDate && !endDate) {
      setFilteredOrders(orders);
      return;
    }


    console.log(startDate)
    console.log(endDate)
    // const filtered = orders.filter((order) => {
    //   const orderDate = new Date(order.date); // ধরছি order.date আছে
    //   const start = startDate ? new Date(startDate) : new Date("1900-01-01");
    //   const end = endDate ? new Date(endDate) : new Date("2100-12-31");
    //   return orderDate >= start && orderDate <= end;
    // });

    setFilteredOrders(filtered);
  };

  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    setFilteredOrders(orders);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Filter Orders</h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div>
          <label className="text-sm text-gray-600">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#57c7d4] outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#57c7d4] outline-none"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={handleFilter}
            className="w-full bg-[#57c7d4] text-white py-2 rounded-lg hover:bg-[#45b0bb] transition-all duration-300"
          >
            Apply Filter
          </button>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleClear}
            className="w-full border border-[#57c7d4] text-[#57c7d4] py-2 rounded-lg hover:bg-[#e3f8fa] transition-all duration-300"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mt-6">
        <OrderWappers initialorder={filteredOrders} />
      </div>
    </div>
  );
}
