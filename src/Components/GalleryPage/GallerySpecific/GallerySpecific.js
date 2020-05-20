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
      <ImageGallery showBullets items={images[category]} />
    </PageWrapper>
  )
}

export default withRouter(gallerySpecific)