import React from 'react'
import "./profile.css"

function Profile() {
  return (
    <div className='formsContainer'>
      <div className="loginForm">
        <form>
          <h1>Login Form</h1>
          <div className='inputContainer'>
            <label htmlFor="loginEmail">Email</label>
            <input type="email" id='loginEmail'/>
          </div>
          <div className='inputContainer'>
            <label htmlFor="loginPassword">Password</label>
            <input type="password" id='loginPassword'/>
          </div>
          <button type='submit'>Login</button>
        </form>

      </div>
      <div className="signUpForm">
        <form>
          <h1>Sign Up Form</h1>
          <div className='inputContainer'>
            <label htmlFor="name">First Name</label>
            <input type="text" id='name'/>
          </div>
          <div className='inputContainer'>
            <label htmlFor="Lname">Last Name</label>
            <input type="text" id='Lname'/>
          </div>
          <div className='inputContainer'>
            <label htmlFor="Email">Email</label>
            <input type="email" id='Email'/>
          </div>
          <div className='inputContainer'>
            <label htmlFor="Password">Password</label>
            <input type="password" id='Password'/>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>

    </div>
  )
}

export default Profile
