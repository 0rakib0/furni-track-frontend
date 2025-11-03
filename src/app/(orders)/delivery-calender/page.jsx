import React from 'react'

import PageTitle from '@/components/PageTitle/PageTitle'
import DeliveryCalendar from '@/components/DeliveryCalender/DeliveryCalendar'
function Calender() {
  const deliveryDates = ["2025-10-11", "2025-10-15", "2025-10-18"];
  return (
    <div>
      <PageTitle></PageTitle>
      <div>
        <DeliveryCalendar deliveryDates={deliveryDates} />
      </div>
    </div>
  )
}

export default Calender