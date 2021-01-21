import React from 'react'
import './HomePage.css'
import girl1 from '../../images/girl-1.png'
import girl2 from '../../images/girl-2.png'
import Gallery from './Gallery'
import InfoPack from '../AboutPage/InfoPack.pdf'

const homePage = () => {
  return (
  <div className='home-page'>
    <h1 className='cc-choreography'>CC Choreography</h1>
    <hr className='divider-small-screen' />
    <h2 className='tag-line'>Unleashing everyone's inner dancer</h2>
    <div className='img-wrapper-left'>
    <img src={girl1} alt='CC Choreography'/>
    </div>
    <div className='img-wrapper-right'>
    <img src={girl2} alt='CC Choreography'/>
    </div>

    <hr className='divider-large-screen' />

    <a href={InfoPack} download className='download-info-pack'>
      <div>Download 2021 Information Pack</div>
      <i className='fas fa-download'/>
    </a>

    <div className='key-statements'>
      <div>Jazz</div>
      <div>Contemporary</div>
      <div>Hip Hop</div>
      <div>Tap</div>
      <div>Ballet</div>
      <div>Acro/Dance</div>
      <div>Musical Theatre</div>
      <div>Eisteddfods</div>
      <div>Private Lessons</div>
      <div>Tiny Tots</div>
      <div>Pilates</div>
    </div>

    <Gallery />
  </div>
  )
}

export default homePage