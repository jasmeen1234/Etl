import React,{useState} from 'react'

const FormPageThird = () => {
    const [questionA, setQuestionA] = useState('');
    const [questionB, setQuestionB] = useState('');
    const [questionC, setQuestionC] = useState('');
  
   
    const wordLimit = 300;
  
    
    const handleSubmit = (event) => {
      event.preventDefault();
  
      
      console.log({
        questionA,
        questionB,
        questionC,
      });
    };
  
    
    const handleTextareaChange = (event, setter) => {
      const inputValue = event.target.value;
  
     
      if (inputValue.split(' ').length <= wordLimit) {
        setter(inputValue);
      }
    };
  return (
    <div  className='main'>

<form onSubmit={handleSubmit}>
  
  <label>
  1. Tell me about a time you were asked to do something you had never<br>
  </br> done before. How did you react? What did you learn?
  <br></br>
    <textarea  style= {{width:"515px",height:"68px"}}
      value={questionA}
      onChange={(e) => handleTextareaChange(e, setQuestionA)}
      required
    />
    <p>Words remaining: {wordLimit - questionA.split(' ').length}</p>
    <br></br>
  </label>

  {/* Question B */}
  <label>
    Tell me about the last time something significant didn’t go according <br></br>to plan at work.
    What was your role? What was the outcome?<br></br>
    <textarea   style={{width:"515px",height:"68px"}}
      value={questionB}
      onChange={(e) => handleTextareaChange(e, setQuestionB)}
      required
    />
    <p>Words remaining: {wordLimit - questionB.split(' ').length}</p>
  </label>

  {/* Question C */}
  <label>
    What are the three things that are most important to you in a job?<br></br>
    <textarea    style={{width:"515px",height:"68px"}}
      value={questionC}
      onChange={(e) => handleTextareaChange(e, setQuestionC)}
      required
    />
    <p>Words remaining: {wordLimit - questionC.split(' ').length}</p>
  </label>


</form>
</div>
  )
}

export default FormPageThird;