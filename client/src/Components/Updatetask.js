import './Updatetask.css'
import React , {useState} from 'react'
import axios from 'axios'
import { FaRegArrowAltCircleLeft} from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Updatetask(props) {
    const [task,setTask] = useState(props.task.firstname)
    const [fullname,setName] = useState(props.task.name)
    const [email,setEmail] = useState(props.task.mail)
     const [dob,setDob] = useState(props.task.birth)
     const [education,setEducation] = useState(props.task.edu)
     const [location,setLocation] = useState(props.task.loc)
     const [about,setAbout] = useState(props.task.ab)
    const updateTask = () => {
        if((task.trim() === '' && fullname.trim() === ''&& email.trim() === ''&& dob.trim() === ''&& education.trim() === ''&& location.trim() === ''&& about.trim() === '') || (props.task.firstname === task && props.task.name === fullname && props.task.mail === email && props.task.birth === dob && props.task.edu === education && props.task.loc === location && props.task.ab === about)){
            return
        }else {
            axios.put(`http://localhost:8000/api/tasks/${props.task._id}` , {
                _id : props.task._id,
                firstname : task,
                isComplete : props.task.isComplete,
                name: fullname,
                mail: email,
                birth: dob,
                edu: education,
                loc: location,
                ab: about
                
            }).then(res => {
               
                props.removePopup()
                props.updatetask(res.data)
            }).catch(err => console.log(err)) 
        }
    }
    const removepop = () => {
         props.removePopup()
    }
    return(
       <div className='popup'>
           <div className='popup-content'>
            <FaRegArrowAltCircleLeft size={50} className = 'BackTask' onClick={() =>  removepop()}/> 
            
            
            
             
              <Container>
      <Row>
        <Col><h1>Edit Student Details</h1></Col>
        
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
        <Col><button onClick ={() => updateTask()}>Update</button> </Col>
        <Col></Col>
      </Row>
    </Container>
            </div>
            
            </div>
    )
}
export default Updatetask