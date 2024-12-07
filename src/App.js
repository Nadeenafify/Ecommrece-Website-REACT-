import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import OurStore from './Pages/OurStore';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import CompareProducts from './Pages/CompareProducts';
import Favourite from './Pages/Favourite';
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import ProductView from './Pages/ProductView';
import BlogView from './Pages/BlogView';
import PaymentsPage from './Pages/PaymentsPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            
            <Route path="store" element={<OurStore/>}/>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="compare" element={<CompareProducts/>}/>
            <Route path="favourite" element={<Favourite/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="productView" element={<ProductView/>}/>
            <Route path="blogView" element={<BlogView/>}/>
            <Route path="payments" element={<PaymentsPage/>}/>
           
          </Route>
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
