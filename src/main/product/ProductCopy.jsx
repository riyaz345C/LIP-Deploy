// import { BiSolidCheckbox } from "react-icons/bi";
// import SliderOwn from '../component/SliderOwn'
// import { faqData } from '../data/faq'
// import SliderCard from '../component/Projecthighlight/SliderCard'
// import ProjectHighSlider from '../component/Projecthighlight/ProjectHighSlider'
// import { features } from '../data/spec' 
// import {} from '../component/Faq'

import React, { useRef } from 'react'
import ProductInfo from '../../others/projects/components/ProductInfo'
import './product.css'
import Headline from './Headline'
import LocationAdvantage from './LocationAdvantage'
import ProductPlan from './ProductPlan'
import Faq from '../component/FAQ/Faq'
import { useParams } from 'react-router-dom'
import projects from '../data/projectsData'
// import img from '../assets/main.avif'
import ProjectHighSliderv2 from '../../others/projects/components/ProjectHighSliderv2'

// for form handling
// import { api } from '../../others/api/api'
// import axios from 'axios'

let x = ['Overview', 'Location','Features', 'Highlights', 'Plans' ,'FAQ’s']

function ProductCopy() {
  const enquiryFormRef = useRef()
  // handle submit 
  console.log(enquiryFormRef.current)
    const params = useParams();
    const paramId = params.id.split('%20').join(' ');
    let projectData = projects.filter(e=>e.projectName === paramId);


if(!projectData.length){
  return <h1 style={{margin:'20vh 0',textAlign:'center'}}>404 Error Not Found</h1>
}

projectData = projectData[0]
console.log(projectData);
return (
    <>
      <section className='product-section-1'> 
          <div className="img">
              {/* <img src={img||`https://www.vgn.in/asset/img/banners/project-banner.jpg`} alt="" /> */}
              <img src={projectData.projectPlan} alt="" />
          </div>
          <div className="product-info">
              <ProductInfo projectName={projectData.projectName} 
              subtitle={projectData.subTitle}
              boxArray={projectData.box} />  
          </div>
          <div className="nav">
            {x.map((e,i)=>{
              return(
                <a href={`#${e}`} style={{cursor:'pointer'}} key={i}>{e}</a>
              )
            })}
          </div>
      </section>

      <section className='product-section-2'>
          <div className="path">
              <span>Home</span> 
              <span>Projects</span> 
              <span>{projectData.projectName}</span>
          </div>
          <h1>{projectData.projectName}</h1>
          <Headline span={'Project'} div={'Overview'} id={`Overview`}/> {/*Overview */}
          <p>{projectData.projectOverview}</p>
      </section>

      <section className='product-section-3'>
          <Headline span={'Location'} div={'Advantage'} id={`Location`}/> {/* Location */}
          <iframe title='siteLocation'
          src={ projectData.location?.startsWith('http')?projectData.location: `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124419.90613910851!2d80.0711615434066!3d12.964040045692853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525e37fcf81ea3%3A0xfd16fdb72e898775!2s2nd%20Floor%2C%2059%2C%20Dharga%20Rd%2C%20Zamin%20Pallavaram%2C%20Rajaji%20Nagar%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043!3m2!1d12.964053!2d80.1535634!5e0!3m2!1sen!2sin!4v1714219410750!5m2!1sen!2sin`} 
          style={{border:0,width:'100%',height:'400px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <div className="location-cards">
              {/* Features */}
              {projectData.nearByAttraction.map(e => {
                return <LocationAdvantage title={e?.title} data={e?.points.map(e=>e.point)}/>
              })}
          </div>
      </section>

        {/* form  */}

      <section className='section project-highlights' id='Highlights' > {/*Highlights */}
          <Headline span={`Project`} div={`Highlights`}/>
          <ProjectHighSliderv2 ammArray={projectData.projectsAmmenities}/>
      </section>

      <ProductPlan img={projectData.sitemap}/> {/*Plans */}

      <section className='section faq' id='FAQ’s'> {/*Faq*/}
          <Headline span={'Frequently Asked'} div={`Question`}/>
          {projectData.faq.map((e,i)=>{
            return(
              <Faq key={i} question={e.question} answer={e.answer}/>
            )
          })}
      </section>
      
    </>
  )
}

export default ProductCopy;


/* <form ref={enquiryFormRef} onSubmit={handleSubmit} > 
      <div className="enquire-form" >
        <h1 className="form-title">Enquire Form</h1>
        <input type="text" name="popupName" id="" placeholder="Name" style={{background: '#fff',
  border: '1px solid #bbb', padding: '12px 9px',width: '80%',margin:'0'}}/>
        <input type="number" name="popupNumber" id="" placeholder="Number" />
        <input type="email" name="popupEmail" id="" placeholder="Email" />
        <input type="submit" name="popupSubmit" id="" value={'submit'} className='submit'
        onClick={handleSubmit} style={{cursor:'pointer'}}/>
      </div>
        </form> */

/*
        const handleSubmit = async (e) => {
    e.preventDefault()
  const popupFormData = {
    popupName:enquiryFormRef.current.popupName.value,
    popupNumber:enquiryFormRef.current.popupNumber.value,
    popupEmail:enquiryFormRef.current.popupEmail.value,
  }
    try {
      enquiryFormRef.current.popupSubmit.value = `loading...`
      const response = await axios.post(api.sendmail,popupFormData)
      enquiryFormRef.current.reset()
      enquiryFormRef.current.popupSubmit.value = `sended`;
      setTimeout(()=>{
        enquiryFormRef.current.popupSubmit.value = `submit`;
      },3000)

      console.log(response);  
    } catch (error) {
      console.log(error);
      enquiryFormRef.current.popupSubmit.value = `${error.message} Retry`;
      }

  }
   */