import SendMail from '@/components/customarComponent/SendMail'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import CustomarData from '../CustomarData'

async function SendOfferMail() {
  
        const customars = await CustomarData()

        return (
        <div>
            <PageTitle></PageTitle>
            <SendMail customars={customars}></SendMail>
        </div>
    )
}

export default SendOfferMail