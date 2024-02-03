import React from 'react'
import { useState } from 'react'

function Register() {

  let [details,setDetails] = useState({
    name:"",
    email:"",
    mobile_No:"",
    address:""
  });

 function handleInput(event)
 {

    setDetails((prevObj)=>{
      return {...prevObj,[event.target.name]:event.target.value}
    })

   
 }

 function handleSubmit()
 {
  console.log(details);
 }

 

  return (
    <div className='register-form'>
      
      <input type='text' name='name' onChange={handleInput} placeholder='Enter Name' value={details.name}/>

      <input type='text' name='email' onChange={handleInput} placeholder='Enter Email' value={details.email}/>

      <input type='text' name='mobile_No' onChange={handleInput} placeholder='Enter your mobile number' value={details.mobile_No}/>

      <input type='textarea' cols="30" rows="3" name='address' onChange={handleInput} placeholder='Enter your address' value={details.address}/>

      <button onClick={handleSubmit}>Register</button>

      


      
    </div>
  )
}

export default Register
