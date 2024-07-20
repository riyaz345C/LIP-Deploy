import './registration.css';
import login from './lip-logo.png';
import React, { useRef, useState, } from "react";
import useFormPost from '../useFormPost';
import Loader from '../../main/assets/Loader';

const style = { display: 'flex', alignItems: 'center', justifyContent: 'center' };

const Registration = () => {
  // const [formInfo, setFormInfo] = useState('');
  const formRef = useRef();
  const [submit, loading, state] = useFormPost();
  const [submitted , setSubmitted]  = useState('submit')

const setSubmit = () => setTimeout(()=>{
  console.log('hi');
  setSubmitted('submit')
}, 5000)
  const FormData = (e) => {
    e.preventDefault();
    const postData = {
      // organizationType: formRef.current.organizationType.value,
      dataType:'lip-registration data',
      registrationProof: formRef.current.registrationProof.value,
      name: formRef.current.name.value,
      // material: formRef.current.material.value,
      // secondropdown: formRef.current.secondropdown.value,
      // contactr: formRef.current.contactr.value,
      // mobiler: formRef.current.mobiler.value,
      emailr: formRef.current.emailr.value,
      phone: formRef.current.phone.value,
      stater: formRef.current.stater.value,
      cityr: formRef.current.cityr.value,
    };
    submit(postData, formRef);
    // console.log(postData);
    setSubmit()
  };

  // console.log(formInfo);

  return (
    <>
      <div className="bg-img">
        <div className="containers">
          <form className="form-vendor" ref={formRef} onSubmit={FormData}>
            <img src={login} className="login-bgs" alt="login-img" />
            
            <div className="input-container1">
              <div className="p-div">
                <p className="pName">Type*</p>
              </div>
              <div className="select">
                <label className="radio-inline">
                  <input type="radio" name="registrationProof" value="GSTNumber" required />Investor
                </label>
                <label className="radio-inline">
                  <input type="radio" name="registrationProof" value="PANNumber" required />Vendor
                </label>
              </div>
            </div>

            <div className="input-container1">
              <div className="p-div">
                <p className="pName">Name*</p>
              </div>
              <div className="select">
                <input className="input-fieldr" type="text" placeholder="Enter your Name" name="name" required />
              </div>
            </div>

            <div className="input-container1">
              <div className="p-div">
                <p className="pName">Email*</p>
              </div>
              <div className="select">
                <input className="input-fieldr" type="email" placeholder="Enter your Email" name="emailr" required />
              </div>
            </div>

            <div className="input-container1">
              <div className="p-div">
                <p className="pName">Phone Number*</p>
              </div>
              <div className="select">
                <input className="input-fieldr" type="text" placeholder="Enter your Phone number" name="phone" required />
              </div>
            </div>

            <div className="input-container1">
              <div className="p-div">
                <p className="pName">State*</p>
              </div>
              <div className="select">
                <input className="input-fieldr" type="text" placeholder="Enter your State" name="stater" required />
              </div>
            </div>

            <div className="input-container1">
              <div className="p-div">
                <p className="pName">City*</p>
              </div>
              <div className="select">
                <input className="input-fieldr" type="text" placeholder="Enter your City" name="cityr" required />
              </div>
            </div>

            <button type="submit" className="btn" style={style}>
              {loading ? <Loader size={25} color={'#fff'} /> : <>{(state.message && 'Retry') || 'Submit'}</>}
            </button>
          </form>
        </div>
      </div>

      <div className="minifooter">
        <p className="copy">
          Copyright © 2023 VGN Projects Estates Pvt Ltd, All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Registration;
