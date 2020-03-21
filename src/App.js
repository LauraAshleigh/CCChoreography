import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import NavigationBar from './Components/Navigation/NavigationBar'
import HomePage from './Components/HomePage/HomePage'
import AboutPage from './Components/AboutPage/AboutPage'
import TeachersPage from './Components/TeachersPage/TeachersPage'
import TimetablePage from './Components/TimetablePage/TimetablePage'
import FeesPage from './Components/FeesPage/FeesPage'
import TestimonialsPage from './Components/TestimonialsPage/TestimonialsPage'
import GalleryPage from './Components/GalleryPage/GalleryPage'
import ContactPage from './Components/ContactPage/ContactPage'
import Footer from './Components/Footer/Footer'

const app = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/teachers' component={TeachersPage}/>
        <Route path='/timetable' component={TimetablePage}/>
        <Route path='/fees' component={FeesPage}/>
        <Route path='/testimonials' component={TestimonialsPage}/>
        <Route path='/gallery' component={GalleryPage}/>
        <Route path='/contact' component={ContactPage}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default app
