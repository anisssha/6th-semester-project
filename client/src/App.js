import React from 'react'
import Navigation from './customer/components/Navigation/Navigation.jsx'
// import Homepage from './customer/pages/HomePage/Homepage.jsx'
import Footer from './customer/components/Footer/Footer.jsx'
import Product from './customer/components/Product/Product.jsx'


function App() {
  return (
    <div className="">
        <Navigation/>
        {/* <Homepage/> */}
        
        <Product/>
      
       
        <Footer/>
      </div>
    
  
  )
}

export default App
