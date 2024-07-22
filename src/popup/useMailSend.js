import axios from "axios"
import { api } from "../others/api/api";

const useMailSend = (popupFormRef,setloading,formType,setSubmitted) => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            let postData;
           if(formType==='popup'){
             postData = {
                dataType:'lip-popup data',
                Name:  popupFormRef?.current?.popupName.value,
                Email:  popupFormRef?.current?.popupEmail.value,
                Phone:  popupFormRef?.current?.popupPhone.value,
            }
           }
            console.log(popupFormRef.current);
            setloading(true)
            const submitData = await axios.post(api.sendmail,postData)
            console.log(submitData);
            console.log(postData);
            popupFormRef.current.reset()
            setSubmitted('submitted')
        } catch (error) {
            setSubmitted('retry')
            console.log(error);
        } finally{
            setTimeout(() => setSubmitted('submit'),10000)
            setloading(false)
        }
    }
    return [handleSubmit]
}
export default useMailSend