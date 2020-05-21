import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import chelsea from '../../images/chelsea.jpg'
import TeacherAvatar from '../TeachersPage/TeacherAvatar'
import Icons from '../Icons/Icons'
import map from '../../images/map.png'
import './ContactPage.css'

const contactPage = () => {
  return (
    <PageWrapper title='Contact'>
      <div className='contact-details-grid'>
        <div className='contact-details'>
          <div className='chelsea-contact-details'>
            <TeacherAvatar noGrow image={chelsea} altText='Chelsea Cole' />
            <div>
              <b>Principal Dancer &amp; Director:</b> 
              <div>Chelsea Cole</div>
              <br />
              <div><a href='mailto:chelsea@ccchoreography.org'>chelsea@ccchoreography.org</a></div>
              <div><a href='tel:0403406529'>0403 406 529</a></div>
              <br />
              <div className='contact-icons'>
                <Icons facebook instagram instagramAdults />
              </div>
            </div>
          </div>

          <div className='location-details'>
            <b>Studio Location:</b>
            <div>
              <a href='https://www.google.com/maps/place/23%2F54+Clyde+St,+Hamilton+North+NSW+2292/@-32.912182,151.7349957,17z/data=!3m1!4b1!4m5!3m4!1s0x6b7315a8623a528d:0xe400a8fc4bf35bee!8m2!3d-32.9121865!4d151.7371844' target='__blank'>
                Unit 23, 54 Clyde St, Hamilton North
              </a>
            </div>
            <br />
            <b>Directions:</b>
            <div>
              Drive in through the driveway next to the LifeLine on Clyde St 
              and follow the driveway all the way around the buildings 
              until you reach Unit 23 - CC Choreography.
            </div>
          </div>
        </div>

        <div className='map-container'>
          <img className='map' src={map} alt='CC Choreography Location' />
        </div>

      </div>
    </PageWrapper>
  )
}

export default contactPage