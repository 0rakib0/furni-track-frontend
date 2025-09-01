import CustomarTable from '@/components/customarComponent/CustomarTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

async function ViewCustomar() {


    const data = await fetch('http://127.0.0.1:8000/customars/')
    const customars = await data.json()


    console.log(customars)

  return (
    <div>
        <PageTitle></PageTitle>
        <CustomarTable customars={customars}></CustomarTable>
    </div>
  )
}

export default ViewCustomar