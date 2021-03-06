import React from 'react'
import ccsymbol from '../../images/symbol-grey.png'

const teacherAvatar = props => {
  return (
    <div className={`teacher-avatar${props.noGrow ? '' : ' grow'}`}>
      <img src={ccsymbol} alt='CC Choreography' />
      <img src={props.image} alt={`${props.altText} CC Choreography`} />
    </div>
  )
}

export default React.memo(teacherAvatar)
