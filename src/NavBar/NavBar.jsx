import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/service'>Services</Link></li>
      <li><Link to='/help'>Help</Link></li>
    </ul>
  )
}

export default NavBar
