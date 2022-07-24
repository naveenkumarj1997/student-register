import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'

import Addtask from './Components/Addtask'
import Tablelist from './Components/Tablelist';
import Updatetask from './Components/Updatetask';

import {Row,Col} from 'react-bootstrap'

import { BsTrash } from "react-icons/bs";


function App()  {
       const [tablelist,setTablelist] = useState([])
       const [tasktoUpdate , setTasktoUpdate] = useState({})
       const [tasktoDelete , setTasktoDelete] = useState("")
       const [showPopup , setShowPopup] = useState (false)
       const [showPopup1 , setShowPopup1] = useState (false)
       const [showPopupdel , setShowPopupdel] = useState (false)
       useEffect(() => {
          fetchTasks();  
       },[])

       function fetchTasks(searchString = "") {
        axios.get(`http://localhost:8000/api/tasks?key=${searchString}`).then(res =>{
              setTablelist(res.data).catch(err => console.log(err))
            })
       }
       const addTask = newTask => {
        
         setTablelist([...tablelist,newTask])
         
       }
       const taskComplete = task => {
         const newList = [...tablelist]
         newList.forEach(item => {
           if(item._id === task._id){
             item.isComplete = task.isComplete
           }
         })
         setTablelist(newList)
       }
       
       
       const removeTask = task => {
         console.log("hI");
         const newList = tablelist.filter(item => !(item._id === task._id))
         
         setTablelist(newList)
      }
      
     

      const removeTaskFromdb = id => {
          console.log(console.log(tasktoDelete));
            
        }


      const updatetask = task => {
               const newList = [...tablelist]
               newList.forEach(item => {
                 if(item._id === task._id){
                   item.firstname =  task.firstname
                   item.name =  task.name
                   item.mail =  task.mail
                   item.birth =  task.birth
                   item.edu =  task.edu
                   item.loc =  task.loc
                   item.ab =  task.ab
                 }
               })
               setTablelist(newList)
      }

      const handleSearch = (event) => {
        fetchTasks(event.target.value);
      };
    return (
      <div class="main">
          
         
        <h2>Student management system</h2>
        
        <div  class="Addalign">
          <button class="Addbutton" onClick = {() => setShowPopup1(!showPopup1)}>ADD</button>
        </div>

             
       <div style={{paddingBottom:"30px",textAlign: "left",marginBottom:"30px",paddingLeft:"10%"}}>
         <input name="query" type="text" placeholder='Search' style={{width:"30%",height:"40px"}} onChange={handleSearch}  />
      </div>


        {showPopup1 && <Addtask addTask = {addTask} removePopup1 = {() => setShowPopup1(!showPopup1)}/>}
        
        <Tablelist tablelist = {tablelist}  taskComplete = {taskComplete} removeTask = {removeTask} 
        tasktoUpdate = {task => setTasktoUpdate(task)} showPopup = {() => 
        setShowPopup(!showPopup)}  ShowPopupdel= {() => setShowPopupdel(!showPopupdel)}/>
        {showPopup && <Updatetask task = {tasktoUpdate} updatetask = { updatetask}
        removePopup = {() => setShowPopup(!showPopup)}/>}

          
        {showPopupdel && <div className='popupdel'>
           <div className='popup-content'> 
          <Row>
            <Col><BsTrash size={50} /></Col>
        
          </Row>
          <Row>
           
           <Col><h3>Your Recored is </h3></Col>
          </Row>
          <Row>
           
           <Col><h3> Deleted</h3></Col>
          </Row>
          <Row>
           <Col><button class="button"  onClick = {() => setShowPopupdel(!showPopupdel)}>Ok</button></Col>
           {/* <Col><button class="button" onClick = {() => removeTaskFromdb()}>ok</button></Col> */}
           
          </Row>
            
             
        
        </div>
        </div>}
      </div>
    )
  }


export default App;

      