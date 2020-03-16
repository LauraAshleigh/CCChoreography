import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationBar.css'
import CCSymbol from '../../images/symbol-black.png'


const navigationBar = () => {
  return (
    <div className='nav-bar'>
      <div className='cc-symbol-wrapper'>
        <img src={CCSymbol} alt='CC Choreography'/>
      </div>
      <div className='nav-links-wrapper'>
        <NavLink to='/' exact className='nav-link'>Home</NavLink>
        <NavLink to='/about' className='nav-link'>About</NavLink>
        <NavLink to='/teachers' className='nav-link'>Teachers</NavLink>
        <NavLink to='/timetable' className='nav-link'>Timetable</NavLink>
        <NavLink to='/fees' className='nav-link'>Fees</NavLink>
        <NavLink to='/contact' className='nav-link'>Gallery</NavLink>
        <NavLink to='/gallery' className='nav-link'>Contact</NavLink>
      </div>
      <div className='social-icons-wrapper'>
        <i className='fab fa-instagram'></i>
        <i className='fab fa-facebook-f'></i>
      </div>
    </div>
  )
}

export default navigationBar