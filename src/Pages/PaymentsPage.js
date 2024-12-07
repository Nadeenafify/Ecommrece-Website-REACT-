import React from 'react'
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const PaymentsPage = () => {
 
  //get data from navigation
    const { state } = useLocation();
    const price = state?.price;



  return (
      <>   
      
       <Helmet>
      <title>Payments</title>
     </Helmet>

    <div className="container py-4">
      
        <div className="row">
      
   
            <div className='border rounded p-4 bg-white d-flex '>
                 
                <div className='w-75'>      
                    <h4 className='fw-bold'>Credit Card</h4>
                    <div className='d-flex gap-3 mt-4 ms-5  flex-wrap'>

                        <div className=' d-flex flex-column'  >
                           <h4 className='text-gray p-1 '>Card Number</h4>
                           <input type="tel" pattern="^4[0-9]{12}(?:[0-9]{3})?$"  maxlength="16"  className='rounded p-2 '/>
                        </div>

                          <div>
                            <h4 className='text-gray p-1'>Expiration date</h4>
                            <input type="date"    className='rounded p-2'/>    
                         </div>
                         <div>
                            <h4 className='text-gray p-1'>CVN2</h4>
                            <input type="tel"  maxlength="3"  className='rounded p-2 w-50'/>  
                         </div> 
                      
                    </div>
                    <h4 className='fw-bold my-2 mt-xl-5 mt-1'>Total : {price} </h4>
                    <button className='p-2 rounded w-25 ms-5 mt-xl-5 mt-1'>Pay</button>
                </div>
               
                <img   src="https://th.bing.com/th/id/OIP.QqCg2k1lIiCFUroZ3rYP1gHaHa?rs=1&pid=ImgDetMain" className="w-25 h-50 img-fluid" loading='lazy' alt="image"/>
            </div>
            
        </div>
    </div>
      </>
  )
}

export default PaymentsPage