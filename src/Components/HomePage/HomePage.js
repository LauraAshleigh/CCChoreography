import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import Girl1 from '../../images/girl-1.png'
import Girl2 from '../../images/girl-2.png'

const homePage = () => {
    return (
        <div className='home-page'>
            <div className='cc-choreography'>
                {/* <img src={CCSymbol} alt='CC Choreography'/> */}
                <h1>CC Choreography</h1>
            </div>
            <h2 className='tag-line'>Unleashing everyone's inner dancer</h2>
            <div className='img-wrapper'>
                <img src={Girl1} alt='CC Choreography'/>
            </div>
            <div className='img-wrapper-2'>
                <img src={Girl2} alt='CC Choreography'/>
            </div>

            {/* <div className='btn-wrapper'>
                <Link to='/about' className='btn btn-full'>Learn More</Link>
                <Link to='/timetable' className='btn btn-outline'>View Timetable</Link>
            </div> */}
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

                {/* <div className='statement'>
                    <i class="fas fa-users"></i>
                    <div>A dance community</div>
                   

                </div>
                <div className='statement'>
                    <i class="fab fa-itunes-note"></i>
                    <div>Variety of dance styles</div>

                </div>
                <div className='statement'>
                    <i class="fas fa-door-open"></i>
                    <div>Our door is always open</div>

                </div> */}
                
            </div>
            
        </div>
    )
}

export default homePage