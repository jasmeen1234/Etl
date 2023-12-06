
import './App.css'
import React,{ useState } from 'react'
import Enquiry from './Enquiry'

function MainOne() {
  const [firstName, setFirstName] = useState('') 
  
  const [mobile, setMobile] = useState('') 
  
  const [email, setEmail] = useState('') 
   
const[dob, setDob]=useState('')
  

  function validateForm() {
    

    if (firstName.length == 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }
    if (email.length == 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }

    alert('Form successfully fill')
  }

  return (
    <div className="main">
        <div className='enquiry'><Enquiry/></div>
      <form>
        <label>1.Name*</label>
        <input
          placeholder="Enter Your Name"
          onChange={(e) => setFirstName(e.target.value)}
        /> <br></br>
        <label>2.Email*
       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
       </label><br>
        </br>
        
        <label>3.Date Of Birth</label>
       <input type='date'
      placeholder='Enter BirthDate'
      onChange={(e) => setDob(e.target.value)}
      name='birthdate'
       />
       <br></br>
        <label>4.Contact no.
        <input
          placeholder="Enter Your 10 Digit Number"
          onChange={(e) => setMobile(e.target.value)}
        />
        </label>
       
       
        <button
          type="next"
          onClick={() => {
            validateForm()
          }}
        >
          Next
        </button>
      </form>
    </div>
  )
}

export default MainOne