import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutPage from './Components/AboutPage/AboutPage'
import ContactPage from './Components/ContactPage/ContactPage'
import FeesPage from './Components/FeesPage/FeesPage'
import Footer from './Components/Footer/Footer'
import GalleryPage from './Components/GalleryPage/GalleryPage'
import HomePage from './Components/HomePage/HomePage'
import NavigationBar from './Components/Navigation/NavigationBar'
import TeachersPage from './Components/TeachersPage/TeachersPage'
import TestimonialsPage from './Components/TestimonialsPage/TestimonialsPage'
import TimetablePage from './Components/TimetablePage/TimetablePage'
import './App.css'

const App = () => {
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

export default App
