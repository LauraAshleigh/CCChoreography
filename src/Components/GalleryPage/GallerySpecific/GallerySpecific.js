import React from 'react'
import { withRouter } from 'react-router-dom'
import PageWrapper from '../../PageWrapper/PageWrapper'
import ImageGallery from 'react-image-gallery'
import images from '../GalleryConfig'
import './GallerySpecific.css'

const gallerySpecific = props => {
  const category = props.match.params.category
  
  return (
    <PageWrapper smallTitle title={`${category === 'danceevents' ? 'Dance Events' : category} Photos`}>
      {category !== '2020' ? null :
        <div className='concert-link'>
          See each item from our 2020 concert on our <a target='__blank' href='https://www.youtube.com/channel/UCwJnhZ1LfN9RNE9kyM0a1hQ/videos'>YouTube channel</a>
        </div>
      }
      <ImageGallery showBullets items={images[category]} />
    </PageWrapper>
  )
}

export default withRouter(gallerySpecific)