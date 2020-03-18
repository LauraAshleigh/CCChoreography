import React from 'react'
import Icons from '../Icons/Icons'
import PageWrapper from '../PageWrapper/PageWrapper'
import aboutPhoto from '../../images/about-photo.jpg'
import InfoPack from './InfoPack.pdf'
import './AboutPage.css'

const aboutPage = () => {
  return (
    <PageWrapper title='About'>
      <div className='about'>
        CC Choreography (formerly Black Swan Dance) welcomes everyone from beginners to experienced dancers, of all ages!
        <br/><br />
        Our specialised teachers support, encourage, nurture and promote a passion for dance in a safe and welcoming environment.
        <br/><br/>
        We have a brand new, purpose built dance studio located in Hamilton North.
        <br/><br/>
        We offer Jazz, Tap, Ballet, Contemporary, Hip Hop, Musical Theatre, Acrobatics &amp; Dance,
        Technique Class, Eisteddfod Troupes, Tiny Tots, Private Lessons, Adults &amp; Pilates.
        <br/><br/>
        Find us on Social Media or Email for any enquiries.  
      </div>
     
      <div className='about-icons'>
        <Icons instagram facebook email />
      </div>

      <a href={InfoPack} download className='download-info-pack'>
        <div>Download 2020 Information Pack</div>
        <i className='fas fa-download'/>
      </a>

      <div className='about-photo'>
        <img src={aboutPhoto} alt='CC Choreography' />
      </div>

    </PageWrapper>
  )
}

export default aboutPage