import Link from 'next/link'
import React from 'react'

function PageTitle() {
  return (
    <div className='my-8'>
        <button type='submit' className='text-xl text-[#57c7d4] mb-2 border-b pb-2'><Link href="/">🏠 Back To Home</Link></button>
    </div>
  )
}

export default PageTitle