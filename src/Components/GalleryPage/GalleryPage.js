import React from 'react'
import { Route } from 'react-router-dom'
import GalleryHome from './GalleryHome/GalleryHome'
import GallerySpecific from './GallerySpecific/GallerySpecific'

const galleryPage = () => {

  return (
    <React.Fragment>
      <Route path='/gallery' exact component={GalleryHome} />
      <Route path='/gallery/:category' component={GallerySpecific} />
    </React.Fragment>
  )
}

export default galleryPage