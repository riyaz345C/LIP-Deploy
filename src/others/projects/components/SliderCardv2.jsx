import React from 'react'
import '../../../main/component/Projecthighlight/slidercard.css'
// import { api } from '../../api/api'
// // import imgpath from '../../../main/product/img/pic1.png'
// import { path } from '../../../main/product/img/path'
const SliderCardv2 = ({data,img}) => {
  return (
   <div className="project-highlights-card">
    {/* <img src={`${api.get}${img}`} alt="" /> */}
    <img src={`${img}`} alt="" style={{minHeight:'300px',maxHeight:'300px'}}/>
    <h3>{data}</h3>
   </div>
  ) 
}

export default SliderCardv2