import React from 'react'
import { api } from '../../api/api'

function  ProductInfo({projectName,subtitle,boxArray}) {
  return (
    <>
    <img src={`${api.get}/lip.jpg`} alt="" />
    <h2>{projectName ||`projectName`} <br />
    {subtitle ||`subtitle`}</h2>
<h4>Best Palce To Buy</h4>
<div className="info">
   {boxArray.map(e=>{return(
     <div className="points" key={e.id}>
     <h3>{e.head||`head`}</h3>
     <p>{e.content||`paragraph`}</p>
 </div>
   )})}
    <button><a href="#Overview" style={{textDecoration:'none',color:'#fff'}}>Project Details</a></button>
    <button>Enquiry Now </button>
    {/* <button>Check It !</button> */}
</div>
    </>
  )
}

export default ProductInfo