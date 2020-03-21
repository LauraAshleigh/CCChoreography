import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import testimonials from './TestimonialsConfig'
import './TestimonialsPage.css'

const testimonialsPage = () => {
  return (
    <PageWrapper title='Testimonials'>
      <div className='testimonials-grid'>
        {testimonials.map(testimonial =>
          <blockquote className='testimonial' key={testimonial.name}>
            {testimonial.review}
            <cite> {testimonial.name} - {testimonial.year}</cite>

          </blockquote>
        )}
      </div>


    </PageWrapper>
  )
}

export default testimonialsPage