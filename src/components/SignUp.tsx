import React from 'react'

function SignUp() {
  return (
    <div>
      <h1>Create a new account</h1>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </div>
  )
}

export default SignUp
