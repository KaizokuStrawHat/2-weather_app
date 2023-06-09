import React from 'react'
import cities from './cities.js'
import {v4 as uuidv4} from 'uuid';

export default function TopButtons(props) {

  function cityButtonclicked (id)
  {
    const clickedCity = cities.find( city => city.id === id);
    props.setCity(clickedCity.name); 
  }

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => {
            return(
                <button className="text-white text-lg font-medium" key={uuidv4()} id={city.id} onClick={() => cityButtonclicked(city.id)}>
                  {city.name.replace('_', ' ')}
                </button>
            )
        })}
    </div>
  )
}
