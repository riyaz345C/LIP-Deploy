import React from 'react'
import { api } from '../../api/api'
import { Link } from 'react-router-dom'

function  ProductInfo({projectName,subtitle,boxArray,click}) {
  return (
    <>
    <img src={`${api.get}/lip.jpg`} alt="" />
    <h2>{projectName ||`projectName`} <br />
    {subtitle ||`subtitle`}</h2>
<h4>Best Place To Buy</h4>
<div className="info">
   {boxArray.map(e=>{return(
     <div className="points" key={e.id}>
     <h3>{e.head||`head`}</h3>
     <p>{e.content||`paragraph`}</p>
 </div>
   )})}
    <button><Link to={`#Overview`} onClick={()=> click()} style={{textDecoration:'none',color:'#fff'}}>Project Details</Link></button>
    <button> <Link to={`/registration`} style={{textDecoration:'none',color:'#fff'}}>Enquiry Now</Link> </button>
    
</div>
    </>
  )
}

export default ProductInfo