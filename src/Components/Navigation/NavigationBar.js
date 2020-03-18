import React from 'react'
import { NavLink } from 'react-router-dom'
import Icons from '../Icons/Icons'
import ccsymbol from '../../images/symbol-black.png'
import './NavigationBar.css'

const navigationBar = () => {
  return (
    <div className='nav-bar'>
      <div className='cc-symbol-wrapper'>
        <img src={ccsymbol} alt='CC Choreography'/>
      </div>
      <div className='nav-links-wrapper'>
        <NavLink to='/' exact className='nav-link'>Home</NavLink>
        <NavLink to='/about' className='nav-link'>About</NavLink>
        <NavLink to='/teachers' className='nav-link'>Teachers</NavLink>
        <NavLink to='/timetable' className='nav-link'>Timetable</NavLink>
        <NavLink to='/fees' className='nav-link'>Fees</NavLink>
        <NavLink to='/gallery' className='nav-link'>Gallery</NavLink>
        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
      </div>
      
      <Icons instagram facebook />
    </div>
  )
}

export default navigationBar