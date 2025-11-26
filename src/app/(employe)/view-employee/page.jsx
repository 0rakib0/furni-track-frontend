import EmployeeTable from '@/components/employeeComponents/EmployeeTable/EmployeeTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import EmployeeData from '../EmployeeData'

async function ViewEmployee() {

    const employees = await EmployeeData()

    return (
        <div>
            <PageTitle></PageTitle>
            <EmployeeTable employees={employees}></EmployeeTable>
        </div>
    )
}

export default ViewEmployee