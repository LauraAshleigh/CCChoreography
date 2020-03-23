import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Icons from '../Icons/Icons'
import ccsymbol from '../../images/symbol-black.png'
import MobileNavDrawer from './MobileNavDrawer'
import menu from './NavConfig'
import './NavigationBar.css'

const navigationBar = (props) => {

  const onLogoClick = () => props.history.push('/')

  return (
    <div className='nav-bar'>
      <div onClick={onLogoClick} className='cc-symbol-wrapper'>
        <img src={ccsymbol} alt='CC Choreography'/>
      </div>
      <div className='nav-links-wrapper'>
        {menu.map(menuItem =>
          <NavLink key={menuItem} className='nav-link' exact to={menuItem === 'Home' ? '/' : `/${menuItem.toLowerCase()}`}>
            {menuItem}
          </NavLink>
        )}
      </div>
      
      <Icons instagram facebook />

      <MobileNavDrawer />
    </div>
  )
}

export default withRouter(navigationBar)