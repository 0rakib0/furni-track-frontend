import PaymentReport from '@/components/dealerComponents/PaymentReport/PaymentReport'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

async function DealerPaymentReport() {
  const data = await fetch('http://127.0.0.1:8000/dealer-payment/')
  const dealerPayments = await data.json()
  return (
    <div>
        <PageTitle></PageTitle>
        <PaymentReport dealerPayments = {dealerPayments}></PaymentReport>
    </div>
  )
}

export default DealerPaymentReport