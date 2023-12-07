import React,{useState} from 'react'
import "./FormContainer.css"
import Enquiry from './Enquiry'
import FormPageOne from './FormPageOne'
import Footer from './Footer'
const initDetails={
    
}
const FormContainer = () => {
const [details,setDetail]=useState(initDetails);
  return (
    <>
      <div className='home'>
        <div className='form_container' >
          <div style={{
            background: "var(--blue-15, rgba(26, 143, 230, 0.15))", width: "716px", height: "140px"
          }}>
            <Enquiry />
          </div>
          <div style={{ background: "white", width: "716px", height: "500px" }}>
            <FormPageOne setDetail={setDetail} />
          </div>
        </div>
      </div>
      //{console.log("!!!!!!!!!!!",details)}
      <Footer details={details} />
    </>
  )
}

export default FormContainer