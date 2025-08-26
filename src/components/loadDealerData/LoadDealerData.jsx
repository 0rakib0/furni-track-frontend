import React from 'react'

async function LoadDealerData() {
    const dealerData = await fetch('http://127.0.0.1:8000/dealers/')
    const dealers = await dealerData.json()
  return null
}

export default LoadDealerData