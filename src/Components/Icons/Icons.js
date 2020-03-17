import React from 'react'
import './Icons.css'

const icons = (props) => {
  return (
    <div className={`${!props.email ? 'two-icons' : 'three-icons'} social-icons-wrapper`}>
      {!props.instagram ? null :
        <a href='https://www.instagram.com/cc.choreography/?hl=en' target='__blank'>
          <i className='fab fa-instagram'/>
        </a>
      }
      {!props.facebook ? null :
        <a href='https://www.facebook.com/cc.choreography/' target='__blank'>
          <i className='fab fa-facebook-f'/>
        </a>
      }
      {!props.email ? null :
        <a href='mailto:chelsea@ccchoreography.org'>
          <i className='far fa-envelope' />
        </a>
      }
    </div>
  )
}

export default icons