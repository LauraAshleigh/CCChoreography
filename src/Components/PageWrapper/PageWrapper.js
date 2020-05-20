import React from 'react'
import './PageWrapper.css'

const pageWrapper = (props) => {
  return (
    <div className='page-wrapper'>
      <h2 className={`page-title${props.smallTitle ? ' small-page-title' : ''}`}>{props.title}</h2>
      <hr/>
      {props.children}
    </div>
  )
}

export default pageWrapper