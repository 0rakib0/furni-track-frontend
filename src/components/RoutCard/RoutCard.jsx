import Link from 'next/link'
import React from 'react'

function RoutCard({name, path}) {
    return (
        <>
            <div className='bg-white px-4 py-6 rounded-md md:text-xl shadow-lg hover:text-[#57c7d4] transition duration-300 ease-in-out'>
                <Link href={path}>{name}</Link>
            </div>
        </>
    )
}

export default RoutCard