import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import TeacherAvatar from './TeacherAvatar'
import teachers from './TeachersConfig'
import './TeachersPage.css'

const teachersPage = () => {
  return (
    <PageWrapper title='Teachers'>
      <div className='teachers-large-screen'>
        {teachers.map(teacher => 
          <div key={teacher.name} className='teacher-grid'>
            <TeacherAvatar image={teacher.image} altText={teacher.name} />
            <div className='teacher-text'>
              <div className='teacher-name'>{teacher.name}</div>
              <div className='teacher-position'>{teacher.position}</div>
              <div className='teacher-about' dangerouslySetInnerHTML={{__html: teacher.about}} />
            </div>
          </div>
        )}
      </div>

      <div className='teachers-small-screen'>
        {teachers.map(teacher => 
          <div key={teacher.name} className='teacher-grid'>
            <TeacherAvatar image={teacher.image} altText={teacher.name} />
            <div className='teacher-text'>
              <div className='teacher-name'>{teacher.name}</div>
              <div className='teacher-position'>{teacher.position}</div>
            </div>

            <div className='teacher-about-small-screen' dangerouslySetInnerHTML={{__html: teacher.about}} />
          </div>
        )}
      </div>
    </PageWrapper>
  )
}

export default teachersPage