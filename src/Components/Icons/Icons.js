import React from 'react'
import './Icons.css'

const icons = (props) => {
  return (
    <div className={`${!(props.email || props.instagramAdults) ? 'two-icons' : 'three-icons'} social-icons-wrapper`}>
      {!props.instagram ? null :
        <div className='icon-and-text'>
          <a href='https://www.instagram.com/cc.choreography/?hl=en' target='__blank'>
            <i className='fa fab fa-instagram'/>
          </a>
          {!(props.instagram && props.instagramAdults) ? null :
            <div className='icon-text'>(Kids)</div>
          }
        </div>
      }
      {
        !props.instagramAdults ? null :
        <div className='icon-and-text'>
          <a href='https://www.instagram.com/cc.choreography.adults/?hl=en' target='__blank'>
            <i className='fab fa-instagram'/>
          </a>
          <div className='icon-text'>(Adults)</div>
        </div>
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