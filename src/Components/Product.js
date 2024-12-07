import React from 'react'
import StarRatings from 'react-star-ratings';



const product = (props) => {
  
  
  return (
    <>
    <div className='bg-white rounded p-2 cursor-pointer h-100'>
        <img srcSet={`${props.image} 500w, ${props.image} 1000w, ${props.image} 2000w`}    src={props.image} loading="lazy"   alt="product-image" className='w-50 p-1' style={{marginLeft:"30%",height:"45%"}}/>
        <div className='px-sm-4 mt-sm-1'>
        <h4 className='color-orange fw-bold'>Havels</h4>
        <StarRatings
                       rating={product?.rating?.rate || 4}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="0.9em"
                        starSpacing="0.2em"
                      />
        <h4 className='fw-bold'>{props.text}<br/>10 Back Multi Colored</h4>
        <p>${props.price}</p>
        </div>
    </div>
 </>
  )
}

export default product