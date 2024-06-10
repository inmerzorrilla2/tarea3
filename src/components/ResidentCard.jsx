import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/residentcard.css'

const ResidentCard = ({info}) => {

    const [resident, getResident] = useFetch();

    useEffect(() => {   
        getResident(info)
    }, [])
    console.log(resident)
    

  return (
    <article className='residentcard'>
        <figure className='residentcard__img'>
            <img src={resident?.image} alt="character image" />
            <figcaption className='residentcard__status'>
                <div className={`residentcard__circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </figcaption>
        </figure>
        <h2 className='residentcard__name'>{resident?.name}</h2>
        <hr className='residentcard__hr' />
        <ul className='residentcard__list'>
            <li className='residentcard__item'><span>Specie: </span>{resident?.species}</li>
            <li className='residentcard__item'><span>Origin: </span>{resident?.origin.name}</li>
            <li className='residentcard__item'><span>Number of episodes where this character appears: </span>{resident?.episode.length}</li>
        
        </ul>
    </article>
  )
}

export default ResidentCard