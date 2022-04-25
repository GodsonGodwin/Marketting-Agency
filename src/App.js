import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import GlobalStyle from './globalStyle';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Product from './pages/Products/Product'
import SignUp from './pages/SignUp/SignUp'
import ScrollToTop from './components/ScrollTop';
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path='/' exact element = {<Home />} />
      <Route path='/services' exact element = {<Services />} />
      <Route path='/product' exact element = {<Product />} />
      <Route path='/signup' exact element = {<SignUp />} />
      
      </Routes> 

      <Footer/>
    </Router>
  )
}

export default App