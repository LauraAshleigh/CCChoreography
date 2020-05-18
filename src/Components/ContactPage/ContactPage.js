import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import chelsea from '../../images/chelsea.jpg'
import TeacherAvatar from '../TeachersPage/TeacherAvatar'
import Icons from '../Icons/Icons'
import './ContactPage.css'

const contactPage = () => {
  return (
    <PageWrapper title='Contact'>
      <div className='contact-details-grid'>
        <div className='contact-details'>
          <div className='chelsea-contact-details'>
            <TeacherAvatar image={chelsea} altText='Chelsea Cole' />
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
            <div>Unit 23, 54 Clyde St, Hamilton North</div>
            <br />
            <b>Directions:</b>
            <div>
              Drive in through the driveway next to the LifeLine on Clyde St 
              and follow the driveway all the way around the buildings 
              until you reach Unit 23 - CC Choreography.
            </div>
          </div>
        </div>

        <div>
          {/* <iframe 
            className='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.4698683030606!2d151.7349957147447!3d-32.912181977473566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7315a8623a528d%3A0xe400a8fc4bf35bee!2s23%2F54%20Clyde%20St%2C%20Hamilton%20North%20NSW%202292!5e0!3m2!1sen!2sau!4v1584760620760!5m2!1sen!2sau' 
            title='CC Choreography Map' 
            frameborder='0' allowfullscreen='' aria-hidden='false' tabindex='0' 
          /> */}
          
          <iframe 
            className='map'
            title='CC Choreography Map'
            src='https://www.google.com/maps/d/u/0/embed?mid=1MgRb7k_L4ZZqfDm0xkxPKDyQeu8yofZ5' 
            frameborder='0' allowfullscreen='' aria-hidden='false' tabindex='0' 
          />
        </div>

      </div>
    </PageWrapper>
  )
}

export default contactPage