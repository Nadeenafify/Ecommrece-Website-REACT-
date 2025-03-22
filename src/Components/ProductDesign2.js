import React from 'react'


const ProductDesign2 = (props) => {
  return (
    <>
      <div className={props.black?'bg-black text-white rounded p-2 cursor-pointer h-100':'bg-white rounded p-2 cursor-pointer h-100'} >
      <div className='px-sm-4 mt-sm-3'>
        <h4 className='color-orange fw-bold'>Havels</h4>
        <h4 className='fw-bold'>10 Back Multi Colored <br/>{props.text}</h4>
        <p>${props.price}</p>
        </div>
        <img srcSet={`${props.image} 500w, ${props.image} 1000w, ${props.image} 2000w`}    src={props.image} loading="lazy"  alt="product-image" className='h-75 w-75  p-md-5 py-5' style={{marginLeft:"15%"}}/>
       
    </div>
    </>
  )
}

export default ProductDesign2