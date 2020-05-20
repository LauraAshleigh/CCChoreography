import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import PageWrapper from '../../PageWrapper/PageWrapper'
import images from '../GalleryConfig'
// import fifteen from '../../../images/2015/IMG-1.JPG'
// import sixteen from '../../../images/2016/IMG-1.JPG'
// import seventeen from '../../../images/2017/IMG-1.JPG'
// import eighteen from '../../../images/2018/IMG-1.JPG'
// import nineteen from '../../../images/2019/IMG-1.JPG'
// import danceEvents from '../../../images/DanceEvents/IMG-1.JPG'
import './GalleryHome.css'

const galleryHome = props => {
  const galleryCategories = ['Dance Events', '2019', '2018', '2017', '2016', '2015']

  return (
    <PageWrapper title='Gallery'>
      <div className='gallery-grid'>
        {galleryCategories.map(category =>
          <Link key={category} to={`${props.location.pathname}/${category.replace(/ /g, '').toLowerCase()}`} >
            <img className='cover-photo' src={images[category.replace(/ /g, '').toLowerCase()][0].original} alt={`${category} Gallery`} />
            <div className='cover-photo-title'>{category}</div>
          </Link>
        )}
      </div>
    </PageWrapper>
  )
}

export default withRouter(galleryHome)