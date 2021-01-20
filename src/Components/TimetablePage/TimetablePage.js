import React from 'react'
import { ageGroups, timetable } from './TimetableConfig'
import PageWrapper from '../PageWrapper/PageWrapper'
import './TimetablePage.css'
import InfoPack from '../AboutPage/InfoPack.pdf'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const timetablePage = () => {
  const times = Object.keys(timetable)
  const days = Object.keys(timetable['10:00 - 10:45 AM'])

  return (
    <PageWrapper title='2021 Timetable'>
      <a href={InfoPack} download className='download-timetable'>
        <div>Download PDF</div>
        <i className='fas fa-download'/>
      </a>
      
      <PerfectScrollbar>
        <table className='timetable'>
          <thead>
            <tr>
              <th>Times</th>
              {days.map(day =>
                <th key={day}>{day}</th>
              )}
            </tr>
          </thead>

          {times.map(time =>
            <tbody key={time}>
              <tr>
                <th>{time === 'Extra' ? '' : time}</th>
                {days.map(day =>
                  <td key={day} dangerouslySetInnerHTML={{__html: timetable[time][day]}}/>
                )}
              </tr>
            </tbody>
            )}
        </table>
      </PerfectScrollbar>

      <div className='sub-timetable-info-wrapper'>
        <div className='red-text'>Age Groups:</div>
        <div className='sub-timetable-info'>
          {ageGroups.map(group => 
            <div key={group}>{group}</div>
          )}
        </div>
      </div>

      {/* <div className='sub-timetable-info-wrapper'>
        <div className='red-text'>Term 1 Starts:</div>
        <div className='sub-timetable-info'>
          Friday 29th January - Thursday 1st April (9 week term)
        </div>
      </div> */}
    </PageWrapper>
  )
}

export default timetablePage