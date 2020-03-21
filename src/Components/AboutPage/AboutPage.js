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
        
        <div>
          CC Choreography (formerly Black Swan Dance) welcomes everyone from beginners to experienced dancers, of all ages!
          <br/><br />
          Our specialised teachers support, encourage, nurture and promote a passion for dance in a safe and welcoming environment.
          <br/><br/>
          We have a brand new, purpose built dance studio located in Hamilton North.
          <br/><br/>
          We offer Jazz, Tap, Ballet, Contemporary, Hip Hop, Musical Theatre, Acrobatics &amp; Dance,
          Technique Class, Eisteddfod Troupes, Tiny Tots, Private Lessons, Adults &amp; Pilates.
          <br/><br/>
          
          Find us on Social Media or Email us for any enquiries.
          <div className='about-icons'>
            <Icons instagram facebook email />
          </div>

          <a href={InfoPack} download className='download-info-pack'>
            <div>Download 2020 Information Pack</div>
            <i className='fas fa-download'/>
          </a>
        </div>
      </div>
     
     <h2 className='dance-styles-heading'>Dance Styles</h2>
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