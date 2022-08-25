import React from 'react'
import styling from './index.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='select-header'>
        <div className='items'>
          <NavLink className={isActive => "links" + (!isActive? " unselected": "")}   to= "/">Home</NavLink>
          <NavLink className={isActive => "links" + (!isActive? " unselected": "")}  to= "/write">Write</NavLink>
          <NavLink className={isActive => "links" + (!isActive? " unselected": "")}  to= "/drafts">Drafts</NavLink>
        </div>
    </div>
  )
}
