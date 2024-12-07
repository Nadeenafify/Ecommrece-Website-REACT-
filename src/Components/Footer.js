import React from 'react'
import { Link } from 'react-router-dom'
import{BsLinkedin,BsInstagram,BsGithub,BsYoutube} from 'react-icons/bs'
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
     <>
{/* --------------------------------------------------------------------------------------- */}
       <footer className='py-3 tinyBorder' style={{height:"7em"}}>
        <div className="container">
          <div className="row mt-3">

            {/* ----------------------------------------------------------- */}
            <div className="col-4 col-lg-5">
              <div className="d-flex  align-items-center">
               <IoIosSend className="fs-1 text-white m-2"/>
                <p className='text-white'>Sign Up For NewsLetter</p>
              </div>
            </div>
            {/* ---------------------------------------------------------------- */}
            <div className="col-8 col-lg-7">
            <div className='d-flex border border-white rounded h-75'>
                 <input type="text" className="py-2  rounded-start p-2 w-100 border-0" placeholder="Your Email Adress..."/>
                 <h4 className="p-2 text-white" >
                     Subscribe
                  </h4>
                 </div>
            </div>
            {/* -------------------------------------------------------------------------- */}
          </div>
        </div>
       </footer>
{/* ------------------------------------------------------------------------------------------------ */}
       <footer  className='py-3 tinyBorder'>
        <div className="container">
          <div className="row">
            {/* -------------------------------------------------------------- */}
            <div className="col-lg-3 col-6">
              {/* ---------------------------------- */}
              <h4 className='text-white '>Contact Us</h4>
              <div className='h-100 d-flex flex-column gap-1'>
                 {/* ------------------------------------------ */}
                <address className="text-white  py-2 fs-6 ">
                  <h4>Demo Store<br/>No : 1259 Freedom.Newyork<br/></h4> 
                   <h4>United States</h4>
                   <Link className="text-white  text-decoration-none py-2" href='tel:+91-987654321'><br/>+91-987654321</Link>
                </address>
                {/* ------------------------------------------------------ */}
                
               
                <div  className="d-flex align-items-center  gap-3  mt-2">
                  <Link >
                    <BsLinkedin className='text-white fs-5'/>
                  </Link>
                  <Link>
                    <BsInstagram className='text-white fs-5'/>
                  </Link>
                  <Link href="">
                    <BsGithub className='text-white fs-5' />
                  </Link>
                  <Link href="">
                    <BsYoutube className='text-white fs-5' />
                  </Link>
                </div>
                {/* ------------------------------------------------------ */}
              </div>
              
            </div>

            <div className="col-lg-3 col-6">
               <h4 className='text-white'>Information</h4>
               <div className='d-flex flex-column'>
                  <Link className='text-white text-decoration-none  mb-1 py-1'><h4>Privacy Policy</h4></Link>
                  <Link className='text-white text-decoration-none  mb-1 py-1'><h4>Refund Policy</h4></Link>
                  <Link className='text-white text-decoration-none  mb-1 py-1'><h4>Shiping Policy</h4></Link>
                  <Link className='text-white text-decoration-none  mb-1 py-1'><h4>Terms Of Services</h4></Link>
                
               </div>

            {/* -------------------------------------------------------- */}
            </div>
            <div className="col-lg-3 col-6 mt-3 mt-lg-0">
               <h4 className='text-white'>Account</h4>
                
                <div className='d-flex flex-column'>
                  <Link className='text-white text-white text-decoration-none  mb-1 py-1'><h4>Search</h4></Link>
                  <Link className='text-white text-white text-decoration-none   mb-1 py-1'><h4>About US</h4></Link>
                  <Link className='text-white text-white text-decoration-none   mb-1 py-1'><h4>Faq</h4></Link>
                  <Link className='text-white text-white text-decoration-none  mb-1 py-1'><h4>Contact</h4></Link>
                  <Link className='text-white text-white text-decoration-none  mb-1 py-1'><h4>Size Chart</h4></Link>
              
                </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            <div className="col-lg-3 col-6 mt-3 mt-lg-0">
               <h4 className='text-white'>Quick Links</h4>
               <div className='d-flex flex-column'>
                  <Link className='text-white text-white text-decoration-none  mb-1 py-1'><h4>Accessories</h4></Link>
                  <Link className='text-white text-white text-decoration-none  mb-1 py-1'><h4>Laptops</h4></Link>
                  <Link className='text-white text-white text-decoration-none  mb-1 py-1'><h4>HeadPhones</h4></Link>
                  <Link className='text-white text-white text-decoration-none  mb-1 py-1'><h4>Smart Watches</h4></Link>
                  <Link className='text-white text-white text-decoration-none  mb-1 py-1'><h4>Tablets</h4></Link>
               </div>
            </div>
          </div>
        </div>
       </footer>
{/* -------------------------------------------------------------------------------------------------- */}
       <footer  className='py-3' >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className='text-white'>&copy; {new Date().getFullYear()} Powered By Developer 's Corner </p>
            </div>
          </div>
        </div>
       </footer>
{/* --------------------------------------------------------------------------------------------- */}
     </>
  )
}

export default Footer