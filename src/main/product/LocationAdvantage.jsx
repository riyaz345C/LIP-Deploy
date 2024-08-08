import React from 'react'
import './locadv.css'
function LocationAdvantage({title,data,className}) {
  return (
   <>
   <div className={`locadv ${className||''}`} id='Features'>
    <h3>{title}</h3>
    <div className="location-points">
    {data.map((e,i)=>{
        return(
            <li key={i}>{e}</li>
        )
    })}
    </div>
   </div>
   </>
  )
}

export default LocationAdvantage