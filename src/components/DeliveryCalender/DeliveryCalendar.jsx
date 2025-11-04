"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // custom CSS file

export default function DeliveryCalendar() {

    const [deliveryDates, setDeliveryDate] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchOrderDates = async () =>{
            try{
                setLoading(true)
                const res = await fetch("http://127.0.0.1:8000/delivery-dates")
                const dates = await res.json()
                setDeliveryDate(dates)
            }catch(err){
                setError(err.mesaage)
            }finally{
                setLoading(false)
            }
        }
        fetchOrderDates()
    }, [])

    console.log(deliveryDates)
    // const deliveryDates = ["2025-11-28", "2025-11-10", "2025-11-15", "2025-11-30"];

    const tileClassName = ({ date, view }) => {
        if (view === "month") {
            const dateString = date.toLocaleDateString("en-CA");
            if (deliveryDates.includes(dateString)) {
                console.log("Highlight:", dateString);
                return "highlight-date";
            }
        }
    };


    if(loading) return <p>Loading...</p>;
    if(error) return <p className='text-red-500'>Error: {error}</p>
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Delivery Calendar</h2>
            <div>
                <Calendar tileClassName={tileClassName} className="w-full h-full" />
            </div>
        </div>

    );
}
