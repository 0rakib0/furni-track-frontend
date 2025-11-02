"use client"
import React, { useEffect, useState } from 'react'

import {
    BarChart as ReBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

function BarChart() {
    const [orderData, setOrderData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() =>{
        const fetchOrder = async () =>{
            try{
                setLoading(true)
                setError(null)
                const res = await fetch("http://127.0.0.1:8000/chart-data/")
                if(!res.ok) throw new Error(`HTTP Error: ${res.status}`)
                const data = await res.json()
                setOrderData(data.order_data.map(item => ({
                    name: item.date,
                    count: item.count
                })))
            } catch(err){
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchOrder()
    },[])

    if(loading) return <p>Loading...</p>;
    if(error) return <p className='text-red-500'>Error: {error}</p>
    return (
        <div className='w-full h-[350px]'>
            <ResponsiveContainer width="100%" height="100%">
            <ReBarChart width={500} height={250} data={orderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 10]}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#57c7d4" />
            </ReBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChart