import React, {useState} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);


  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <>
      <div id='header'>
        <header className={colorChange ? 'navbar-colorChange' : 'navbar'}>
                    <Link to='/'><img src="Images/logo.svg"/></Link>
                    <nav>
                    <Link to='/Model_S' style={{textDecoration: 'none'}}><p href="#">Model S</p></Link>
                    <Link to='/Model_3'style={{textDecoration: 'none'}}><p>Model 3</p></Link>
                    <Link to='/Model_X'style={{textDecoration: 'none'}}><p>Model X</p></Link>
                    <Link to='/Model_Y'style={{textDecoration: 'none'}}><p>Model Y</p></Link>
                        <p>Solar Roof</p>
                        <p>Solar Panels</p>
                    </nav>
                    <div style={{display:'flex'}}>
                        <Link to='/LogIn'style={{textDecoration: 'none'}}><p>Account</p></Link>
                        <p onClick={() =>{setNavbarOpen(true);}}>Menu</p>
                    </div>
        </header>
      </div>

    <div id='blur_bg' className={navbarOpen ? 'BG_Blur_active' : 'BG_Blur'}></div>

    <div className = {navbarOpen ? 'menu_box_active' : 'menu_box'}>
        <i class="fa-solid fa-xmark" id='menu_icon' onClick={()=> setNavbarOpen(false)}></i>

        <Link to='/Model_S' style={{textDecoration: 'none'}}><p onClick={()=> setNavbarOpen(false)}>Model S</p></Link>
        <Link to='/Model_3'style={{textDecoration: 'none'}}><p onClick={()=> setNavbarOpen(false)}>Model 3</p></Link>
        <Link to='/Model_X'style={{textDecoration: 'none'}}><p onClick={()=> setNavbarOpen(false)}>Model X</p></Link>
        <Link to='/Model_Y'style={{textDecoration: 'none'}}><p onClick={()=> setNavbarOpen(false)}>Model Y</p></Link>

        <p>Solar Panels</p>
        <p>Solar Roof</p>
        <p>Model S</p>
        <div style={{}}></div>
        <p>Careers</p>
        <p>Find Us</p>
        <p>Events</p>
        <p>Support</p>
        <p>Investor Relations</p>
    </div>
        

    </>
  )
}

export default Header
