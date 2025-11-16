import ExpenseReport from '@/components/employeeComponents/ExpenseReport/ExpenseReport'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

async function ViewEmployeeExpenses() {
  const response = await fetch('http://127.0.0.1:8000/employee-expense/')
  const expenseData = await response.json()

  return (
    <div>
        <PageTitle></PageTitle>
        <ExpenseReport expenseData={expenseData}></ExpenseReport>
    </div>
  )
}

export default ViewEmployeeExpenses