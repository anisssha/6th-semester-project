import React from 'react'
import Navigation from './customer/components/Navigation/Navigation.js'
import Homepage from './customer/pages/HomePage/Homepage.jsx'

function App() {
  return (
    <div className="">
      <div className='border-2 border-red-600 max-h-screen'>
        <Navigation/>
        <Homepage/>
      </div>
    
    </div>
  )
}

export default App
