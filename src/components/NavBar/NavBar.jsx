import Link from 'next/link'
import React from 'react'

function NavBar() {


  const navItems = [
    { id: '1', name: 'Home', path: '/' },
    { id: '2', name: 'Manage Orders', path: '/order-management' },
    { id: '3', name: 'Manage Dealer', path: '/manage-dealers' },
    { id: '4', name: 'Manage Employee', path: '/employee-management' },
    { id: '5', name: 'About', path: '/about-furnitack' },
    { id: '6', name: 'Contact', path: '/contact-us' },
  ]



  return (
    <div className="navbar bg-[#57c7d4] text-white shadow-sm md:px-12 rounded-t-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#57c7d4] rounded-box z-1 mt-3 w-52 p-2 shadow">
            {
              navItems.map(navItem => {
                return <li key={navItem.id}><Link href={navItem.path}>{navItem.name}</Link></li>
              })
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">FurniTrack</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          {
            navItems.map(navItem => {
              return <li key={navItem.id}><Link href={navItem.path}>{navItem.name}</Link></li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default NavBar