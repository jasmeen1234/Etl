import React, { useState } from 'react'
const FormPageFouth = () => {
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [interviewDate, setInterviewDate] = useState('');
    const [interviewTime, setInterviewTime] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [interviewMedium, setInterviewMedium] = useState('');
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
       console.log({
            email,
            location,
            interviewDate,
            interviewTime,
            timeZone,
            interviewMedium,
        });
    };
    return (
        <div className='main'>
            <form onSubmit={handleSubmit}>

                <label>
                    Email:
                    <br></br>
                    <input
                        style={{ width: "50%", padding: "5px" }}
                        type="email" value={email} placeholder="Example-userid@gmail.com" onChange={(e) => setEmail(e.target.value)} required />
                </label>

                <br></br>
                <label>
                    Location:
                    <br></br>
                    <input
                        style={{ width: "50%", padding: "5px" }}
                        type="text" placeholder="search or enter your location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </label>

                <br></br>
                <label>
                    Interview Date:<br></br>
                    <input
                        style={{ width: "50%", padding: "5px" }}
                        type="date" placeholder="DD/MM/YYYY" value={interviewDate} onChange={(e) => setInterviewDate(e.target.value)} required />
                </label>
                <br></br>

                <label>
                    Interview Time:    <br></br>
                    <input
                        style={{ width: "50%", padding: "5px" }}
                        type="time" placeholder="12:00" value={interviewTime} onChange={(e) => setInterviewTime(e.target.value)} required />
                </label>
                <br></br>
                <label>
                    Time Zone:   <br></br>
                    <select value={timeZone} onChange={(e) => setTimeZone(e.target.value) }   style={{ width: "52%", padding: "5px" }} required>
                        <option value="">Select Time Zone</option>
                        <option value="Time Zone 1">Time Zone 1</option>
                        <option value="Time Zone 2">Time Zone 2</option>
                    </select>
                    <br></br>
                </label>

                <br></br>
                <label>
                    Interview Medium:   <br></br>
                    <select  style={{ width: "52%", padding: "5px" }} value={interviewMedium} onChange={(e) => setInterviewMedium(e.target.value)} required>
                        <option value="">Select Interview Medium</option>
                        <option value="In-person">In-person</option>
                        <option value="Phone call">Phone call</option>
                        <option value="Video call">Video call</option>
                        <option value="Other">Other</option>
                    </select>
                    <br></br>
                </label>
                <br></br>

               
            </form>
        </div>
    );
}

export default FormPageFouth;