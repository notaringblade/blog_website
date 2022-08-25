import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar'
import styling from './index.css'

export default function SharedLayout() {
  return (
    <>
            <Navbar />
        <div className='layout'>
            <Outlet />
        </div>
    </>
  )
}
