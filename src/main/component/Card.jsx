import React from 'react'
import img1 from '../assets/hero.avif'
import './card.css'
import { BsFacebook,BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Example from '../assets/Loader';
import { Link } from 'react-router-dom';

function Card({title,img,projectOverview,path}) {
  return (
    <>
    <div className="primary-card">
        {/* <div className="img"></div> */}
        <div style={{padding:0,display:'flex',alignItems:'center',justifyContent:'center'
        ,width:'100%',height:'200px'}}>
          {/* {img?<img src={img?img:img1} alt="" />:<Example/>} */}
          <img src={img?img:img1} style={{height:'100%',objectFit:'cover'}} alt="" />
          </div>
        {/* <div className="price pr-color"><span>xxx$</span> onwards*
        
        </div> */}
        <h2 className='pr-color'>{title||<Example/>}</h2>
        <div className="content se-color">
          {projectOverview||<div 
          style={{height:'200px',backgroundColor:'#ddd',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h2>content not available</h2>
            </div>}
        </div>
        <div className="spec2 se-color">
            <div className="read-more">
              <Link to={`/project/${title}`} style={{color:'inherit',textDecoration:'inherit',padding:'0'}}>read-more</Link>
            </div>
            <div className="social-media">
            <div className="facebook"><BsFacebook color={''}/></div>
            <div className="twitter"><FaXTwitter/></div>
            <div className="linkedin"><BsLinkedin/></div>
            </div>
        </div>
        <button><Link to={`/project/${title}`} style={{
          textDecoration:'none',color:'#fff'
        }}>READY TO MOVE IN</Link></button>
    </div>
    </>
  )
}

export default Card