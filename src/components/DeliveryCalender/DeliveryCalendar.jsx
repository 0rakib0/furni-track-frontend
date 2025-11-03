"use client";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // custom CSS file

export default function DeliveryCalendar() {
    const deliveryDates = ["2025-11-28", "2025-11-10", "2025-11-15", "2025-11-30"];

    const tileClassName = ({ date, view }) => {
        if (view === "month") {
            const dateString = date.toLocaleDateString("en-CA");
            if (deliveryDates.includes(dateString)) {
                console.log("Highlight:", dateString);
                return "highlight-date";
            }
        }
    };


    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Delivery Calendar</h2>
            <div>
                <Calendar tileClassName={tileClassName} className="w-full h-full" />
            </div>
        </div>

    );
}
