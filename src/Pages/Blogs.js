import React from 'react' 
import BlogCard from'../Components/BlogCard'
import { Helmet } from 'react-helmet';


const Blogs = () => {
  return (
    <>
   
   <Helmet>
      <title>blogs</title>
    </Helmet>
     
      <div className="py-4">
        <div className="container">
          <div className="row">
      
         {/* ----------------------------------------------------------------------------- */}
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

          {/* -------------------------------------------------------------------- */}
            <div className="col-sm-9 col-7">
              <div className="row g-2">
              
              <div className=" col-lg-6">
               <BlogCard img='https://thumbor.autonomous.ai/n7di5JUzV3ay1qNI2UtkYKJE_wQ=/1600x900/smart/filters:format(webp)/https://storage.googleapis.com/s3-autonomous-upgrade-3/static/upload/images/new_post/smartdesk-4-review-the-ultimate-productivity-hack-708.jpg' />
            </div>
          
            <div className=" col-lg-6">
              <BlogCard img='https://www.html.merku.love/edison/img/library/promoted.jpg' />
            </div>
           
            <div className=" col-lg-6">
               <BlogCard img='https://th.bing.com/th/id/OIP.6e2yPTYrvmd-7EkZvnD3zgHaE8?rs=1&pid=ImgDetMain' />
            </div>
          
            <div className=" col-lg-6">
               <BlogCard img='https://smallbiztrends.com/online-and-offline-marketing-channels/unique-online-marketing-tips.png' />
            </div>
           
            
              </div>
            
            </div>

            {/* -------------------------------------------------------------------------- */}
          </div>
        </div>
      </div>

    
    </>
  )
}

export default Blogs