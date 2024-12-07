import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = (props) => {

  // --------------------------------------------------------------------------------------
  const navigate=useNavigate()
  const image=props.img
  const product={image:image}

  //-------------------------------------------------------------------------------------------
  
  return (
    
       <>
    
        <div className="mb-3  bg-white rounded h-100">
          {/* ------------------------------------------------------------------------------------ */}
            <img srcSet={`${image} 500w, ${image} 1000w, ${image} 2000w`}    src={image} loading="lazy"  alt="blog-image" className='img-fluid rounded h-md-75  h-50 w-100' />      
          {/*---------------------------------------------------------------------------------------------  */}
              <div className="px-sm-5 mt-sm-3 p-2" >
                <h4 className=' fw-bold'>A Beutiful Sunday Morning Renalssance</h4>
                <p>You are only as good as Latest Colletion</p>
                <button className='p-2 rounded px-4 m-4 d-none d-md-block' onClick={()=>{navigate('/blogView', { state: { product } });}}>Read More</button>
                <button className='fs-small rounded px-2 p-1  mb-3 mt-3 d-block d-md-none' onClick={()=>{navigate('/blogView', { state: { product} });}}>Read More</button>
            </div>
          {/* ----------------------------------------------------------------------------------- */}     
         </div> 
    </>
  )
}

export default BlogCard