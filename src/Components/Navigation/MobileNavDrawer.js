import React, { useState } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { NavLink } from 'react-router-dom'
import menu from './NavConfig'

const MobileNavDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  const toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setShowDrawer(open)
  }

  const list =
    <div
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className='mobile-nav-bar'>
        {menu.map(menuItem =>
          <NavLink key={menuItem} className='nav-link' exact to={menuItem === 'Home' ? '/' : `/${menuItem.toLowerCase()}`}>
            {menuItem}
          </NavLink>
        )}
      </div>
    </div>

  return (
    <div>
      <div className='mobile-nav-icon' onClick={toggleDrawer(true)}>
        <i className='fas fa-bars' />
      </div>

      <SwipeableDrawer
        anchor='right'
        open={showDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
    </div>
  )
}

export default MobileNavDrawer