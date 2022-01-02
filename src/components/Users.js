import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
// import User from './User';
import './Users.css'


function Users() {

    const [users, setUsers]=useState([]);
    const [user, setUser]=useState({
        name:"Mr. Michael Bowman",
        streetNumber:"82 ",
        country:"United Kingdom,",
        postcode:"123",
        address: "Alexander Road,  Lisburn, Leicestershire, ",
        timezone: "+4:30 - Kabul",
        gender: "Male",
        profile:"https://randomuser.me/api/portraits/men/81.jpg"
    })
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
         .then((data)=>{
            //  const newData = data.data;
             const newData = data.data.results;
             setUsers(newData);
             console.log(users);
         })
         .catch(err=>console.log(err));
    })
    
    const changeUser=(user1)=>{
        console.log(user1);
        setUser({
         name:`${user1.name.title}  ${user1.name.first}  ${user1.name.last}`,
         streetNumber:`${user1.location.street.number}`,
         country:`${user1.location.country}, `,
         postcode:` ${user1.location.postcode}`,
         address:`${user1.location.street.name}, ${user1.location.city}, ${user1.location.state}, `,
         timezone:`${user1.location.timezone.offset} - ${user1.location.timezone.description}`,
         gender:`${user1.gender==="female"?"Female":"Male"}`,
         profile:`${user1.picture.large}`
        })
    }
    
    return (
    <div>
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex bg-light p-5 rounded profile-container justify-content-center my-5">
                <div><img className="rounded-circle profile-img" src={user.profile} alt="img" /></div>
              <div className="d-flex flex-column align-items-start">
                  <div className="text-danger bolder text-decoration-underline h1">{user.name}</div>
                  <div className="d-flex"><div className="street">{user.streetNumber}, </div><div>{user.address}</div><div className="bolder">{user.country}</div><div>{user.postcode}</div></div>
                  <div>{user.timezone}</div>
                  <div className="text-secondary">{user.gender}</div>
              </div>
            </div>
        
        <div className="m-auto d-flex flex-wrap justify-content-center">
           
            {
                users.map((user)=>{
                    
            
                   return (
                   <div onClick={()=>changeUser(user)}className="m-3 p-3 bg-light fix-width user-container rounded">
                       <div className="d-flex text-secondary id">
                       <div key={user.id} className="">{user.gender} . </div>
                       <div className="mx-2">{user.nat}</div>
                       </div>
                           <div className="bolder">{user.name.title} {user.name.first} {user.name.last}</div>
                    <div className="text-danger email">{user.email}</div>
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
