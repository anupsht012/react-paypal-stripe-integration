
import React, { useState } from 'react'
import './App.css'
import { AppRoutes } from './AppRoutes'
import PayPal from './PayPal'
import Stripes from './Stripes'
const App = () => {
  return (
    <div className='App'>
      <AppRoutes/>
      {/* <PayPal/> */}
    </div>
  )
}

export default App

