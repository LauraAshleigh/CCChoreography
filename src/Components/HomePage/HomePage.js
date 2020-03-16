import React from 'react'
import './HomePage.css'
import girl1 from '../../images/girl-1.png'
import girl2 from '../../images/girl-2.png'

const homePage = () => {
    return (
        <div className='home-page'>
            <div className='cc-choreography'>
                <h1>CC Choreography</h1>
            </div>
            <h2 className='tag-line'>Unleashing everyone's inner dancer</h2>
            <div className='img-wrapper-left'>
                <img src={girl1} alt='CC Choreography'/>
            </div>
            <div className='img-wrapper-right'>
                <img src={girl2} alt='CC Choreography'/>
            </div>

            <hr />
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
        </div>
    )
}

export default homePage