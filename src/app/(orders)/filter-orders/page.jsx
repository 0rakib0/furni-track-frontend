"use client";
import React, { useEffect, useState } from "react";
import OrderWappers from "../OrderWappers";
import PageTitle from "@/components/PageTitle/PageTitle";
import { useRouter } from "next/navigation";

export default function OrderFilterClient({ orders }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const router = useRouter();




  const handleFilter = () => {
    if (!startDate && !endDate) {
      return Null;
    }
      const fetchFilterOrderData = async () => {
        try {
          setLoading(true)
          const res = await fetch(`http://127.0.0.1:8000/order-data-filter/?start_date=${startDate}&end_date=${endDate}`)
          const data = await res.json()
          setFilteredOrders(data)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }
      fetchFilterOrderData()
      router.push(`?start_date=${startDate}&end_date=${endDate}`);

  };

  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    setFilteredOrders(null)
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6">
      <PageTitle></PageTitle>
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
        {filteredOrders && (
          <OrderWappers initialorder={filteredOrders} />
        )}
      </div>
    </div>
  );
}
