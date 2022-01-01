import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './Users.css'


function Users() {

    const [users, setUsers]=useState([]);
    const [user, setUser]=useState({
        title:"Ms.",
        first:"Rucha",
        last:"Kasture"
    })
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
         .then((data)=>{
            //  const newData = data.data;
             const newData = data.data.results;
             setUsers(newData);
             // console.log(obj);
            //  console.log(newData);
             console.log(users);
            //  return newData;
         })
         .catch(err=>console.log(err));
    })
    
    const changeUser=(user1)=>{
        console.log(user1);
        setUser({
         title:user1.name.title,
         first:user1.name.first,
         last:user1.name.last
        })
    }
    
    return (
    <div>
        <div className="d-flex flex-column align-items-center">
            <div>
              <div className="d-flex">
                  <div>{user.title}</div>
                  <div className="mx-1">{user.first} </div>
                  <div>{user.last}</div>
              </div>
            </div>
        
        <div className="m-auto d-flex flex-wrap justify-content-center">
           
            {
                users.map((user)=>{
            
                   return (
                   <div onClick={()=>changeUser(user)}className="m-3 p-2 bg-danger fix-width">
                       <div className="d-flex">
                       <div key={user.id}>{user.gender}</div>
                       <div className="mx-2">{user.nat}</div>
                       </div>
                           <div>{user.name.title} {user.name.first} {user.name.last}</div>
                    <div>{user.email}</div>
                    </div>
                    )
            
                })
            }
        </div>
        </div>
    </div>
    )
}

export default Users
