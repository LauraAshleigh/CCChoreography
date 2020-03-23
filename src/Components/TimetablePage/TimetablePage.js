import React from 'react'
import { ageGroups, timetable } from './TimetableConfig'
import PageWrapper from '../PageWrapper/PageWrapper'
import './TimetablePage.css'
import InfoPack from '../AboutPage/InfoPack.pdf'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const timetablePage = () => {
  const times = Object.keys(timetable)
  const days = Object.keys(timetable['9:30 - 10:15 AM'])

  return (
    <PageWrapper title='2020 Timetable'>
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

      <div className='age-groups-wrapper'>
        <div className='red-text'>Age Groups:</div>
        <div className='age-groups'>
          {ageGroups.map(group => 
            <div key={group}>{group}</div>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}

export default timetablePage