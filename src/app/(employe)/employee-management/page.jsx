import EmployeeTable from '@/components/employeeComponents/EmployeeTable/EmployeeTable'
import OrdersTable from '@/components/orderComponents/OrdersTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import RoutCard from '@/components/RoutCard/RoutCard'
import React from 'react'
import EmployeeData from '../EmployeeData'

async function EmployeManagement() {

    const employeeRout = [
        { name: '📝 Add Employee', path: '/add-employee', id: '1' },
        { name: '📄 View Employee', path: '/view-employee', id: '2' },
        { name: '📈 Expenses Employee', path: '/employee-expense', id: '3' },
        { name: '📆 Employee Expenses History', path: '/view-employee-expense', id: '4' },
    ]


    const employees = await EmployeeData()

    return (
        <div>
        <PageTitle></PageTitle>
      {/* all routs about  orders*/}
      <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2'>
        {
          employeeRout.map(rout =><RoutCard key={rout.id} name={rout.name} path={rout.path}></RoutCard>)
        }
      </div>

        {/* Pending Orders */}

        <EmployeeTable employees={employees}></EmployeeTable>
    </div>
    )
}

export default EmployeManagement