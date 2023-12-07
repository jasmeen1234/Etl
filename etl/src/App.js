import React,{useState} from 'react'
import SideMenu from './components/SideMenu';
// import Home from './components/Home';
import Header from './components/Header';
import "./App.css"
import { Button, Card } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormContainer from './components/FormContainer';
import InterviewAvailability from './components/InterviewAvailability';
import StatementOfPurpose from './components/StatementOfPurpose';
import DocumentsCollections from './components/DocumentsCollections';
const array=[
{
  page:"1",
  name:"",
  email:"",
  dob:"",
  contactno:"",

},
{
  page:"2",
  tenthmarksheet:"",
twelthmarksheet:"",
graduationmarksheet:"",
  offerletter:"",
  salaryslip:"",
  bankstatement:"",
incrementletter:"",
  
},
{
  page:"3",
  tenthmarksheet:"",
twelthmarksheet:"",
graduationmarksheet:"",
  offerletter:"",
  salaryslip:"",
  bankstatement:"",
incrementletter:"",
  
},
{
  page:"4",
  tenthmarksheet:"",
twelthmarksheet:"",
graduationmarksheet:"",
  offerletter:"",
  salaryslip:"",
  bankstatement:"",
incrementletter:"",
  
}

]
const App = () => {
  const[userDetail, setUserDetail]=useState([])
  return (

    <Router>
      <div className='.header'>
        <header>
          <Header />
        </header>
      </div>
      <div>
        <div className='home_container'>
          <SideMenu />
          <Routes>
              {/* <Route path="/" element={<Home />}  />            */}
              <Route path="/" element={<FormContainer />} />            
              <Route path="/documents" element={<DocumentsCollections />} />
              <Route path="/interview" element={<InterviewAvailability />} />
              <Route path="/purpose" element={<StatementOfPurpose />} />
  
          </Routes>
        </div>
        <Card>
          <Button variant="contained" style={{ float: 'right' }} >Next</Button>
        </Card>
      </div>

      {/* <Home /> */}
      {/* <AddEmp /> */}
    </Router>
  )
}

export default App;