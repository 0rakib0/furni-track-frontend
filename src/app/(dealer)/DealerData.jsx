import React from 'react'

async function DealerData() {
    const data = await fetch('http://127.0.0.1:8000/dealers/')
    const dealers = await data.json()
    return (
        dealers
    )
}

export default DealerData