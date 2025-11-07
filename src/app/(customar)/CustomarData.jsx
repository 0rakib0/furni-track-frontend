import React from 'react'

async function CustomarData() {
    const customarsRes = await fetch("http://127.0.0.1:8000/customars/")
    const customarsData = await customarsRes.json()
    return (
        customarsData
    )
}

export default CustomarData