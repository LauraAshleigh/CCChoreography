import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import testimonials from './TestimonialsConfig'
import ccsymbol from '../../images/symbol-grey.png'
import './TestimonialsPage.css'

const testimonialsPage = () => {
  return (
    <PageWrapper title='Testimonials'>
      {testimonials.map((testimonial, key) =>
        <React.Fragment key={testimonial.name}>
          <div className='testimonial-grid' >
            <div className='stars-and-name grow'>
              <img src={ccsymbol} alt='CC Choreography' />
              <div>
                <div className='stars'>
                  {[...Array(testimonial.stars)].map((star, index) =>
                    <i key={index} className='fas fa-star' />
                  )}
                </div>
                <div> {testimonial.name} ({testimonial.year})</div>
              </div>
            </div>
              
            <div>
              <div className='review'>
                <div className='quotation-mark'>&#8220;</div>
                <div className='review-text'>{testimonial.review}</div>
              </div>
              
              {key === testimonials.length - 1 ? null :
                <div className='divider'>
                  <hr/>
                </div>
              }
            </div>
          </div>
        </React.Fragment>
      )}
    </PageWrapper>
  )
}

export default testimonialsPage