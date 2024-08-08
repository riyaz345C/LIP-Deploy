import React, { useEffect, useState } from 'react'
import './faq.css'
import { useParams } from 'react-router-dom'
function Faq({question,answer}) {
    const[view,setView] =useState(false)
    const p = useParams()
    useEffect(()=>{
        setView(false)
    },[p])
    const handleClick = ()=>{
        setView(prv => !prv)
    }
  return (
   <>
    <div className={`faq-container ${view?'showC':'hideC'}`}>
    <div className="question" onClick={()=>{handleClick()}}>{ question } ? <span>{view?'-':'+'}</span></div>
    <div className={`answer ${view?'show':'hide'}`}>
        {answer}
    </div>
    </div>
   </>
  )
}

export default Faq
