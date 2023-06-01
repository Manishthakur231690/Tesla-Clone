import React, {useEffect} from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './header.jsx';
import './CarSeries_style.css';



const Model_S = () => {

  // ******************  AOS Scroll Animation  ***************************
      useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div>
        <Header/>
        <div id='Single_car_con'  style={{backgroundImage: 'linear-gradient(to top, black 5%, transparent 50%), url("Images/Model-3-Main.avif")'}}>
                    <div className='item_text'>
                                <h1 data-aos="fade-up" data-aos-duration="1000">Modal 3</h1>
                                <h3 data-aos="fade-up" data-aos-duration="1400">View Inventory</h3>
                              
                                <div className="features">
                                  <div>
                                        <h2 data-aos="fade-up" data-aos-duration="1000">325+ mi</h2>
                                        <p data-aos="fade-up" data-aos-duration="1000">Range</p>
                                  </div>
                                  <div>
                                        <h2 data-aos="fade-up" data-aos-duration="800">3.1 s</h2>
                                        <p data-aos="fade-up" data-aos-duration="800">0-60 mph</p>
                                  </div>
                                  <div>
                                        <h2 data-aos="fade-up" data-aos-duration="700">190mph</h2>
                                        <p data-aos="fade-up" data-aos-duration="700">Top Speed</p>
                                  </div>
                                </div>
                                
                                <div className="buttonGroup">
                                    <button className='btn1' >Order Now</button>
                                    <button className='btn2' >Demo Drive</button>
                                </div>
                    </div>
        </div>
        <div style={{backgroundImage:'linear-gradient(to top, black 5%, transparent 50%, black), url(Images/Model-3-Interior.avif)',backgroundPosition:'center' , width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            <h1 style={{textAlign:'center', color:'white', paddingTop:'40px'}} data-aos="fade-up" data-aos-duration="1400">Interior of the Future</h1>
        </div>

        <div style={{background:'black', padding:'50px 0', width:'100vw'}}>
          <div id="display_flex">
            <img src="Images/Model-3-Interior-Grid-1.avif" data-aos="fade-in" data-aos-duration="1000" />
            <div className="text" data-aos="fade-up" data-aos-duration="1000">
              <h2>Glass Roof</h2>
              <p>The expansive Glass Roof in Model 3 provides passengers with a brighter, more spacious experience—and a seamless view of the sky.</p>
            </div>
          </div>

          <div id="display_flex2">
            <div className="text" data-aos="fade-up" data-aos-duration="1000">
              <h2>All-Weather Comfort</h2>
              <p>Enhance comfort and convenience with heated seats, side mirrors and steering wheel.</p>
            </div>
            <img src="Images/Model-3-Interior-Gallery-Weather.avif" data-aos="fade-in" data-aos-duration="1000"/>
          </div>

          <div id="display_flex">
            <img src="Images/Model-3-Interior-Gallery-Sound.avif"/>
            <div className="text">
              <h2>Sublime Sound</h2>
              <p>Our premium audio system features 14 speakers, including a subwoofer and dual amplifiers, for interior sound dynamics comparable to a recording studio.</p>
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default Model_S
