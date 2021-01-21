import React from 'react'
import Icons from '../Icons/Icons'
import PageWrapper from '../PageWrapper/PageWrapper'
import everyoneWelcome from '../../images/everyone-welcome.JPG'
import InfoPack from './InfoPack.pdf'
import acro from '../../images/acro.JPG'
import ballet from '../../images/ballet.JPG'
import contemporary from '../../images/contemporary.JPG'
import eisteddfodTroupes from '../../images/eisteddfod-troupes.JPG'
import hipHop from '../../images/hip-hop.JPG'
import jazz from '../../images/jazz.JPG'
import musicalTheatre from '../../images/musical-theatre.JPG'
import pilates from '../../images/pilates.JPG'
import privateLessons from '../../images/private-lessons.JPG'
import tapDance from '../../images/tap-dance.JPG'
import technique from '../../images/technique.JPG'
import tinyTots from '../../images/tiny-tots.JPG'
import './AboutPage.css'

const aboutPage = () => {
  const danceStyleImages = [
    jazz, tapDance, ballet, contemporary, hipHop, musicalTheatre, 
    acro, technique, eisteddfodTroupes, tinyTots, privateLessons, pilates
  ]

  return (
    <PageWrapper title='About'>
      <div className='about-grid'>
        <div>
          <img src={everyoneWelcome} alt='CC Choreography' />
        </div>
        
        <div className='about-text'>
          CC Choreography (formerly Black Swan Dance) welcomes everyone from beginners to experienced dancers, of all ages!
          <br/><br />
          Our specialised teachers support, encourage, nurture and promote a passion for dance in a safe and welcoming environment.
          <br/><br/>
          We have a brand new, purpose built dance studio located in Hamilton North.
          <br/><br/>
          We offer Jazz, Tap, Ballet, Contemporary, Hip Hop, Musical Theatre, Acrobatics &amp; Dance,
          Technique Class, Eisteddfod Troupes, Tiny Tots, Private Lessons, Adults &amp; Pilates.
          
          <div className='social-and-download-large-screen'>
            <br/>
            Find us on Social Media or Email us for any enquiries.
            <div className='about-icons'>
              <Icons instagram facebook email />
            </div>

            <a href={InfoPack} download className='download-info-pack'>
              <div>Download 2021 Information Pack</div>
              <i className='fas fa-download'/>
            </a>
          </div>
        </div>
      </div>

      <div className='social-and-download-small-screen'>
        Find us on Social Media or Email us for any enquiries.
        <div className='about-icons'>
          <Icons instagram facebook email />
        </div>

        <a href={InfoPack} download className='download-info-pack'>
          <div>Download 2021 Information Pack</div>
          <i className='fas fa-download'/>
        </a>
      </div>

    <h2 className='about-sub-heading'>Facilities</h2>
    <hr />

    <div className='about-text facilities'>
      We have a new, purpose built dance studio featuring:
      <ul>
        <li>Tap dancing floor</li>
        <li>Commercial floor (for all other dance styles)</li>
        <li>15 metre long mirrored wall</li>
        <li>Ballet barres</li>
        <li>Air conditioning</li>
        <li>Fans</li>
        <li>Bathroom</li>
        <li>Ample space for students' belongings</li>
      </ul>

      <div>
        We are situated at <a href='https://www.google.com/maps/place/23%2F54+Clyde+St,+Hamilton+North+NSW+2292/@-32.912182,151.7349957,17z/data=!3m1!4b1!4m5!3m4!1s0x6b7315a8623a528d:0xe400a8fc4bf35bee!8m2!3d-32.9121865!4d151.7371844' target='__blank'>Unit 23, 54 Clyde St, Hamilton North</a>. 
      </div>
    </div>
     
     <h2 className='about-sub-heading'>Dance Styles</h2>
     <hr />

      <div className='dance-styles-grid'>
        {danceStyleImages.map((image, key) =>
          <div key={key}>
            <img src={image} alt='CC Choreography' />
          </div>
        )}
      </div>
    </PageWrapper>
  )
}

export default aboutPage