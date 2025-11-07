import CustomarTable from '@/components/customarComponent/CustomarTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import CustomarData from '../CustomarData'

async function ViewCustomar() {

    const customars = await CustomarData()

  return (
    <div>
        <PageTitle></PageTitle>
        <CustomarTable customars={customars}></CustomarTable>
    </div>
  )
}

export default ViewCustomar