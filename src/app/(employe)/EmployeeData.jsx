import React from 'react'

async function EmployeeData() {

    const data = await fetch('http://127.0.0.1:8000/employee/')
    const employees = await data.json()

  return (
    employees
  )
}

export default EmployeeData