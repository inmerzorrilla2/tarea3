import React from 'react'
import './styles/locationcard.css'

const LocationCard = ({info}) => {

 
  return (
    <article className='location'>
      <h2 className='location__name'>{info?.name}</h2>
      <ul className='location__list'>
        <li className='location__item'><span>Type:</span>{info?.type}</li>
        <li className='location__item'><span>Dimension:</span>{info?.dimension}</li>
        <li className='location__item'><span>Population:</span>{info?.residents.length}</li>
      </ul>
    </article>
  )
}

export default LocationCard 