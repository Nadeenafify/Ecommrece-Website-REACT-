import React from 'react'
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogView = () => {
  const { state } = useLocation();
  const product = state?.product;
  console.log(product.image)

  return (
    <>
    <Helmet>
      <title>Blog View</title>
    </Helmet>

    
      <div className="container  py-4 home"  >
        <div className="row g-2 g-md-4">
         
         {/* ---------------------------------------------------- */}
          <div className="col-sm-3 col-5">
            <div className='bg-white p-sm-3 p-2 mb-sm-3 rounded'>
              <h4 className='fw-bold p-sm-2'>Find By Categories</h4>
              <div className='px-4'>
                  <h4 className='mb-sm-2 fw-normal'>Watch</h4>
                  <h4 className='mb-sm-2 fw-normal'>Tv</h4>
                  <h4 className='mb-sm-2 fw-normal' >Camera</h4>
                  <h4 className='mb-sm-2 fw-normal'>Laptop</h4>     
              </div>
            </div>
            </div>

           {/*---------------------------------------------------------------  */}
       
         
           <div className="col-sm-9 col-7  rounded">      
                
                   <img srcSet={`${product.image} 500w, ${product.image} 1000w, ${product.image} 2000w`}   loading="lazy"  src={product.image}  className='img-fluid  rounded-top  w-100'  alt="image-blog"/>
                   <div className='bg-white rounded-bottom p-4'>
                    <h2 className='mt-2 fw-bold  ms-4'>A Beautiful Sunday Morning</h2>
                   <p className='mt-1 px-4 py-2'>
                    You are only as good as Latest Colletion.
                    You are only as good as Latest Colletion 
                    You are only as good as Latest Colletion. 
                    You are only as good as Latest Colletion. 
                    You are only as good as Latest Colletion. 
                    You are only as good as Latest Colletion.
                    You are only as good as Latest Colletion. 
                    You are only as good as Latest Colletion.
                    </p> 
                    </div>  
           </div> 
               
      </div>
    </div>
    </>
  )
}

export default BlogView