import React from 'react';
import '../Components/login.css';






const LogIn = () => {
  return (
    <>
                 <header>
                    <img src="Images/logo.svg" />
                    <div style={{display:'flex', alignItems:'center'}}>
                        <i class="fa-solid fa-globe" style={{fontSize:'19px'}}></i>
                        <p>India</p>
                    </div>
                 </header>



                <form action="#">
                    <div className='form_item'>
                        <h1>Create Account</h1>

                        <p>Full Name</p>
                        <input type="text" required/>

                        <p>Email</p>
                        <input type="email" required/>

                        <p>Password</p>
                        <input type="password" required/>

                        <p>Confirm Password</p>
                        <input type="password" required/>

                        <p id='condition'>By continuing, I understand and agree to Tesla's  <u>Privacy Notice</u> and <u>Terms Of Use.</u> </p>

                        <button disabled>Create Account</button>



                    </div>
                </form>


    </>
  )
}

export default LogIn
