import React from 'react'

export const Card = (props) => {
  const {image, title} =props;
  
  return (
    <div className='bg-white text-center rounded p-3 shadow border border-muted'>
        <img  src={image} loading='lazy'alt='quizine for a country' className='img-fluid img-responsive rounded'/>
        <h3>{title}</h3>
         </div>
  )
}
