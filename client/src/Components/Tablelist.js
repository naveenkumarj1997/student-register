import './Tablelist.css'
import React,{useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';

import axios from 'axios'
import { FaTimes, FaEdit,FaUserEdit,FaTrashAlt,FaCheck,FaRegArrowAltCircleLeft} from "react-icons/fa";

import {BsTrash } from "react-icons/bs";



function Tablelist(props) {
    
    const tablelist = props.tablelist.map((task,index) => {
        const taskComplete = task => {
            axios.put(`http://localhost:8000/api/tasks/${task._id}` , {
                  _id : task._id,
                  firstname : task.firstname,
                  isComplete : !task.isComplete,
                  name : task.name,
                  mail: task.mail,
                  birth: task.birth,
                  edu: task.edu,
                  loc: task.loc,
                  ab: task.ab
            }).then(res => props.taskComplete(res.data)).catch(err => console.log(err))
        }
        const removeTask = id => {
          console.log('hi1');
             axios.delete(`http://localhost:8000/api/tasks/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
        }
        return <tr key = {index}>
             <td  >
                
             </td>
             
             <td>{task.firstname}</td>
             <td>{task.name}</td>
             <td>{task.loc}</td>
             <td>{task.mail}</td>
             <td>{task.birth}</td>
             <td>{task.edu}</td>
             
             
             <td style={{color:"blue"}}>
             <FaUserEdit className = 'edit' onClick={() => {
                 props.showPopup()
                 props.tasktoUpdate(task)
                 
             }}/>Edit</td>
             <td style={{color:"red"}}>
             <BsTrash style={{color:"red"}}className = 'edit' onClick={() => {
                 props.ShowPopupdel()
                  removeTask(task._id)
                 
             }}/>Delete</td>
             
               
             
             
             
        </tr>
    })
    console.log("todo value",tablelist);
    const list = [
    "firstName:", "John",
  
  ];

  useEffect(() => {
             
        },[]);
    return(
        
        <div style={{width:"100%",marginLeft:"5%",textAlign: "left",marginBottom:"30px"}}>
      
            
            <Table style={{width:"80%",marginLeft:"5%",textAlign: "right"}} size="lg"   bordered hover responsive >
      <thead style={{paddingLeft:"20px",textAlign: "center",width:"61%",height:"50px"}}>
        <tr style={{textAlign: "center",paddingLeft:"20px !important"}}>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Education</th>
          <th>Action</th>
          <th>Delete</th>
        </tr>
        
      </thead>
      <tbody style={{width:"81%",marginLeft:"5%",height:"150px",textAlign: "center",maxHeight:"200px"}}>
        
        {tablelist}
       
      </tbody>
    </Table>
        </div>
    )
}
export default Tablelist