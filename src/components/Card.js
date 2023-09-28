import React from 'react'

export const Card = (props) => {
  const {img, title} = props;

  return (
    <div className='p-3 border text-center border-muted shadow rounded bg-white'>
        <img src={img} alt='card' loading='lazy' className='img-fluid img-responsive rounded' />
        <h3>{title}</h3>
    </div>
  )
}
