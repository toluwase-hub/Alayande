import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutus from './assets/routes/Aboutus'
import Homepage from './assets/routes/Homepage'
import Admission from './assets/routes/Admission'
import Studentportal from './assets/routes/Studentportal'
import Staffpage from './assets/routes/Staffpage'
import Event from './assets/routes/Event'
import Backtotop from './assets/Components/Component/Backtotop'
import Footer from './assets/Components/Component/Footer'

function App() {


  return (
      <React.Fragment>
        <BrowserRouter>
        
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Homepage} />
          <Route path='/Aboutus' Component={Aboutus} />
          <Route path='/Admission' Component={Admission} />
          <Route path='/Studentportal' Component={Studentportal} />
          <Route path='/Staffpage' Component={Staffpage} />
          <Route path='Event' Component={Event} />
        </Routes>

          <Backtotop />
          <Footer />

        </BrowserRouter>






      </React.Fragment>
  )
}

export default App
