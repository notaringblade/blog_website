import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../navbar'
import styling from './index.css'

export default function SharedLayout() {
  return (
    <>
            <NavBar />
        <div className='layout'>
            <Outlet />
        </div>
    </>
  )
}
