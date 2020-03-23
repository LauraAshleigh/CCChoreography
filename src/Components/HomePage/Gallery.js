import React from 'react'
import ImageGallery from 'react-image-gallery'
import acro from '../../images/acro.JPG'
import ballet from '../../images/ballet.JPG'
import contemporary from '../../images/contemporary.JPG'
import eisteddfodTroupes from '../../images/eisteddfod-troupes.JPG'
import hipHop from '../../images/hip-hop.JPG'
import jazz from '../../images/jazz.JPG'
import musicalTheatre from '../../images/musical-theatre.JPG'
import pilates from '../../images/pilates.JPG'
import privateLessons from '../../images/private-lessons.JPG'
import tapDance from '../../images/tap-dance.JPG'
import technique from '../../images/technique.JPG'
import tinyTots from '../../images/tiny-tots.JPG'

const gallery = () => {
  const images = [
    {original: jazz, thumbnail: jazz},
    {original: tapDance, thumbnail: tapDance},
    {original: ballet, thumbnail: ballet},
    {original: contemporary, thumbnail: contemporary},
    {original: hipHop, thumbnail: hipHop},
    {original: musicalTheatre, thumbnail: musicalTheatre},
    {original: acro, thumbnail: acro},
    {original: technique, thumbnail: technique},
    {original: eisteddfodTroupes, thumbnail: eisteddfodTroupes},
    {original: tinyTots, thumbnail: tinyTots}, 
    {original: privateLessons, thumbnail: privateLessons},
    {original: pilates, thumbnail: pilates}
  ]

  return (
    <div className='home-page-gallery'>
      <ImageGallery 
        items={images} showNav={false} showThumbnails={false}
        showFullscreenButton={false} showPlayButton={false} autoPlay 
      />
    </div>
  )
}

export default gallery