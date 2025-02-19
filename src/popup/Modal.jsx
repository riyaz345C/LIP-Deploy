import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import popup from './lip-logo1.png'
// import axios from 'axios'
// import { api } from '../others/api/api'
import Example from '../main/assets/Loader'
import useMailSend from './useMailSend'
import { MdOutlineCancel } from "react-icons/md";
const style ={
    position:'fixed',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#fff',
    zIndex:'1000',
    border:"1px solid #aaa",
    padding:'10px',
    width:'fit-content',
    transition:'all .5s ease .2s'
}
const overlay ={
    position:'fixed',
    left:0,
    right:0,
    top:0,
    bottom:0,
    zIndex:'1000',
    backgroundColor:'rgb(0,0,0,.7)',
    backdropFilter:'blur(2px)',
    transition:'all .5s'
}
const Modal = ({tog}) => {
    const [xe,setX] = useState(false)
    const popupFormRef = useRef()
    const [loading,setloading]=useState(false)   
    const [submitted,setSubmitted]=useState('submit')   
    useEffect(() => {
        let timeoutId;
        
        function pop() {
        
            if (tog) {
        
                timeoutId = setTimeout(() => {
                    setX(true); // No need to negate xe
                }, 1000);
            } else {
                setX(false);
            }
        }
        
        pop();
        return () => {
            clearTimeout(timeoutId); // Clear the timeout on unmount or dependency change
        };
    }, [tog]);
    const [handleSubmit,] = useMailSend(popupFormRef,setloading,'popup',setSubmitted,tog)
    // const handleSubmit = async(e) => {
    //     e.preventDefault()
    //     try {
    //         let postData = {
    //             Name:  popupFormRef.current.popupName.value,
    //             Email:  popupFormRef.current.popupEmail.value,
    //             Phone:  popupFormRef.current.popupPhone.value,
    //         }
    //         setloading(true)
    //         const submitData = await axios.post(api.sendmail,postData)
    //         console.log(submitData);
    //         console.log(postData);
    //     } catch (error) {
    //         console.log(error);
    //     } finally{
    //         popupFormRef.current.reset()
    //         setloading(false)
    //     }
    // }
  return ReactDOM.createPortal(
    
        <>
        <div style={{...overlay,opacity:xe?1:0}}></div>
        <form ref={popupFormRef} className="modal" onSubmit={handleSubmit} style={{...style,opacity:xe?1:0}}>
            {/* Enquire <button onClick={()=>tog(false)}>X</button> */}
            {/* <input type="text" placeholder="enter" /><br />
            <input type="text" placeholder="enter" /><br />
            <input type="text" placeholder="enter" /><br />
            <input type="text" placeholder="enter" /><br /> */}
            <div className='enquire' 
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', }}>
                
             <button onClick={()=>tog(false)} style={{border:'none',borderRadius:'50%',backgroundColor:'#fff'}}>
             <MdOutlineCancel size={25} style={{cursor:'pointer'}}/>
                </button> </div>
            <img
                    src={popup}
                    class="popup-logo"
                    alt="popup-img"
                    style={{
                        display: 'block',
                        margin: '0 auto',
                        width: '45%',
                        height: 'auto'
                    }}
                />
                <h2 style={{width:'fit-content',margin:'0 auto '}}>Enquiry Now</h2>

            <input class="input-fieldr" type="text"  name='popupName'  placeholder="Enter your Name" required /><br />
            <input  class="input-fieldr" type="text"  name='popupPhone' placeholder="Enter your Phone Number" required /><br />
            <input class="input-fieldr" type="text"  name='popupEmail' placeholder="Enter your Email" required/><br />
            <button  type="submit" value="send" class="popupSubmit"   style={{
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        marginTop: '20px',
                        cursor: 'pointer',
                        display: 'block',
                        margin: '0 auto'
                             }}  >
                                {loading?<Example size={30} color={'#eee'}/>:submitted}
                             </button>
    
        </form>
        </>,
      document.getElementById('portal')
  )
}

export default Modal