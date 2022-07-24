import './Addtask.css'
import React ,{useState}from 'react'
import axios  from 'axios'
import { FaRegArrowAltCircleLeft} from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Addtask(props) {
    const [task,setTask] = useState("")
     const [fullname,setName] = useState("")
     const [email,setEmail] = useState("")
     const [dob,setDob] = useState("")
     const [education,setEducation] = useState("")
     const [location,setLocation] = useState("")
     const [about,setAbout] = useState("")
    const addtask = () => {
        
        if(task.trim() === ''){
            return
        } else {
            axios.post('http://localhost:8000/api/tasks' , {
                firstname : task,
                isComplete : false,
                name: fullname,
                mail: email,
                birth: dob,
                edu: education,
                loc: location,
                ab: about
            }).then(res => {
                
                props.addTask(res.data)
                props.removePopup1()
               
            }).catch(err => console.log(err))
        }
    }
    const removepop = () => {
         props.removePopup1()
    }
    return (
        <div className='popup'>
           <div className='popup-content'>
            <FaRegArrowAltCircleLeft size={50} className = 'BackTask' onClick={() =>  removepop()}/> 
            
            
            
             
              <Container>
      <Row>
        <Col><h1>Add Student Details</h1></Col>
        
      </Row>
      <Row>
        <Col><h3>First Name :</h3></Col>
        <Col><input type = 'text' placeholder = 'Enter Your First Name' value={task} onChange = {event => setTask(event.target.value)} /></Col>
        <Col><h3>Last Name : </h3></Col>
        <Col><input type = 'text' placeholder = 'Enter Your Last Name' value={fullname} onChange = {event => setName(event.target.value)} /></Col>
      </Row>
      <Row>
        <Col><h3>Email :</h3></Col>
        <Col><input type = 'text' placeholder = 'Enter Your Email'   value={email} onChange = {event => setEmail(event.target.value)} /></Col>
        <Col><h3>DOB : </h3></Col>
        <Col><input type="date"   style={{ width: "100%",height:"45px" }} value={dob} onChange = {event => setDob(event.target.value)} /></Col>
      </Row>
      <Row>
        <Col><h3>Education :</h3></Col>
        <Col><input type = 'text' placeholder = 'Enter Your Education' value={education} onChange = {event => setEducation(event.target.value)} /></Col>
        <Col><h3>Location : </h3></Col>
        <Col><input type = 'text' placeholder = 'Enter Your Location' value={location} onChange = {event => setLocation(event.target.value)} /></Col>
      </Row>
      <Row>
        <Col sm={3}><h3>About:</h3></Col>
        <Col sm={9}><textarea type = 'text' placeholder = 'Enter Your Details' style={{ width: "100%",height:"130px" }} value={about} onChange = {event => setAbout(event.target.value)}></textarea> </Col>
       
      </Row>
      <Row>
        <Col><button  onClick={() => addtask() }>Submit</button> </Col>
        <Col></Col>
      </Row>
    </Container>
            </div>
            
            </div>
         
        
    )
}
export default Addtask