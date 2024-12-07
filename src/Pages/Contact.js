import React from 'react'
import { IoHome,IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
     <>
      <Helmet>
      <title>Contact</title>
    </Helmet>

         <div className="py-4">
       <div className="container">
        <div className="row">  
       
           {/* --------------------------------------------------------------------------------- */}
            <div className="col-12">       
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13796.853242848443!2d31.196152301731306!3d30.173900047734637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14586ba55e2fd19f%3A0xdd78e5f19fed108e!2sQalyub%2C%20Madinet%20Qelyoub%2C%20Qalyub%2C%20Al-Qalyubia%20Governorate!5e0!3m2!1sen!2seg!4v1724848913448!5m2!1sen!2seg" 
               width="100%"
               height="450" 
               allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
           {/* -------------------------------------------------------------------------------- */}
            <div className="row mt-3 p-4 bg-white rounded">
       
              <div className='col-6 ' style={{height:"33em"}}>
                <h4 className='fw-bold mb-3'>Contact</h4>
                <form >
                  <input className="mb-3 ps-3 p-2 rounded bg-gray w-100 outline-0 border-0" type="text" placeholder='Name'/>
                  <input className="mb-3 ps-3 p-2 rounded bg-gray w-100 outline-0 border-0"  type="email" placeholder='Email'/>
                  <input className="mb-3 ps-3 p-2 rounded bg-gray w-100  outline-0 border-0"  type="number" placeholder='Phone Number' />
                  <input className="mb-3 ps-3 p-2 rounded bg-gray w-100 h-sm-50 h-25 outline-0 border-0"  type="text" placeholder='Comment'/>
                  <input type='submit' className='footerColor button  p-2 mt-4  rounded text-white'/>
                 
                  <br/>
                  </form>
                  
              </div>
      
             <div className="col-6">
             
                 <h4 className='mb-4 fw-bold'>Get In Touch With Us</h4>

                
                   <div className='d-flex gap-3 mb-1'>
                    <IoHome className='fs-4'/>
                     <address>
                     <h4>33 Mont St.San Francisco USA. 19105</h4>
                     </address>
                    </div>
                 
                      <div className='d-flex gap-3 align-items-center mb-3'>
                    <IoCall className='fs-4'/>
                    <Link className="text-dark" href="tel:+91 77234608"><h4>+91 77234608</h4></Link>
                     </div>
              
                  <div className='d-flex gap-3 mb-3 align-items-center'>
                    <MdEmail className='fs-sm-4'/>
                    <h4><a className="text-dark" href="mailto:Demo@Company.com">Demo@Company.com</a></h4>
                 
                  </div>
                  
                  <div className='d-flex gap-3 mb-3 '>
                    <IoIosTimer className='fs-4'/>
                    <p>MonDay-Friday 10AM-8PM</p>
                  </div>
                  
            
             </div>             
        
           </div>

           {/* ----------------------------------------------------------------------- */}
           </div>
        </div>      
       </div>
     </>
  )
}

export default Contact