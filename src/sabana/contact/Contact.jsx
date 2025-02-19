import './contact.css';
import contact from './contact-bg.jpg';
import Card from './Card';
//  icons
// import { FaAngleDoubleRight } from "react-icons/fa";
import {  FaAngleRight } from "react-icons/fa";
import {  FaPhoneVolume } from "react-icons/fa6";
// import { FaClover } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
// import { GrUserManager } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";
const Contact = () => {
return(
<>
<div className="contact-top">
</div>
<img src={contact} alt="contact-bg"  class="contact-bg"/>
<div className="semi-circle">
   <div className="element">
      <div className="home">Home</div>
      <FaAngleDoubleRight className='doubearrow' />
   </div>
   <div className="contact">Contact</div>
</div>
<div class="container-contact">
   <div class="topp">
      <a href="/" className='homec'>
         <p>Home</p>
      </a>
      <FaAngleRight className='singlearrow'   />
      <p>  Contact</p>
   </div>
</div>

<h2 className="infra-title">
<span> Reach  </span> Out To Us 
    </h2>


{/* <h2 className="reach">
   Reach <span>Out To Us</span>   
   <hr>
   </hr> 
</h2> */}
<br />
<br />
<br />
<div className="container">
   <Card 
   icon1={<FaPhoneVolume style={{ margin:'auto',fontSize:'43px',color:'white', }} />}
   content={<h2  className='cardh2'>Head Office</h2>}
   place={<h3 className='cardh2'>Pallavaram</h3>}
   number={
      <a href="tel:+004-42646357" aria-label="Call 004-42646357">
      <h3 className="cardh3">004-42646357</h3>
    </a>}
   />
   <Card
   icon2={<FaRegBuilding  style={{ margin:'auto',fontSize:'43px',color:'white', }} />}
   content={<h2 className='cardh2'>Branch Office</h2>}
   place={<h3 className='cardh2'>Veppur</h3>}
   number={
   <a href="tel:+9790578985" aria-label="Call 9790578985">
      <h3 className="cardh3">9790578985</h3>
    </a>}
   />
   <Card
   icon3={<FaRegBuilding  style={{ margin:'auto',fontSize:'43px',color:'white', }} />}
   content={<h2 className='cardh2'>Branch Office</h2>}
   place={<h3 className='cardh2'>ECR(Kalpakkam)</h3>}
   number={
   <a href="8754393103" aria-label="Call 8754393103">
      <h3 className="cardh3">8754393103</h3>
    </a>}
   />  
   <Card
   icon3={<FaRegBuilding style={{ margin:'auto',fontSize:'43px',color:'white', }} />}
   content={<h2 className='cardh2'>Branch Office</h2> }
   place={<h3 className='cardh2'>Courtallam</h3>}
   number={
   <a href="tel:+9994283692" aria-label="Call 9994283692">
      <h3 className="cardh3">9994283692</h3>
    </a>}/>  
</div>
<div className="map-container">
   <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.121783005591!2d80.15098847356789!3d12.964058215046638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e37fcf81ea3%3A0xfd16fdb72e898775!2sLands%20India%20Properties!5e0!3m2!1sen!2sin!4v1711606049860!5m2!1sen!2sin"
   width="80%"
   height="700"
   style={{ border: 0 }}
   allowFullScreen=""
   loading="lazy"
   referrerPolicy="no-referrer-when-downgrade"
   title="Google Map Embed"
   ></iframe>
</div>
<div className="redcard">
   <h3 className="redcaed-h3"> LIP Projects Estates Pvt. Ltd.</h3>
   <p className="redcard-p">2nd Floor, 59, Dharga Rd, Zamin Pallavaram, Rajaji Nagar, Pallavaram, Chennai, Tamil Nadu 600043</p>
   <p className="redcard-p">  044 4343 9999</p>
</div>
</>
)
}
export default Contact;