import React from 'react'
import Enquiry from './Enquiry';
import FormPageFouth from './FormPageFouth';
import Footer from './Footer';
const InterviewAvailability = () => {
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
            <FormPageFouth />
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default InterviewAvailability;