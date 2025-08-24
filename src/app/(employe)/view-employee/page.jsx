import EmployeeTable from '@/components/employeeComponents/EmployeeTable/EmployeeTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

async function ViewEmployee() {

    const data = await fetch('http://127.0.0.1:8000/employee/')
    const employees = await data.json()

    console.log(employees)


    return (
        <div>
            <PageTitle></PageTitle>
            <EmployeeTable employees={employees}></EmployeeTable>
        </div>
    )
}

export default ViewEmployee