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
        <div id='Single_car_con' style={{backgroundImage: 'linear-gradient(to top, black 5%, transparent 50%), url("Images/Model-S-Main.avif")'}}>
                    <div className='item_text'>
                                <h1 data-aos="fade-up" data-aos-duration="1000">Modal S</h1>
                                <h3 data-aos="fade-up" data-aos-duration="1400">Plaid</h3>
                              
                                <div className="features">
                                  <div>
                                        <h2 data-aos="fade-up" data-aos-duration="1000">396 mi</h2>
                                        <p data-aos="fade-up" data-aos-duration="1000">Range</p>
                                  </div>
                                  <div>
                                        <h2 data-aos="fade-up" data-aos-duration="800">1.99s</h2>
                                        <p data-aos="fade-up" data-aos-duration="800">0-60 mph</p>
                                  </div>
                                  <div>
                                        <h2 data-aos="fade-up" data-aos-duration="700">200mph</h2>
                                        <p data-aos="fade-up" data-aos-duration="700">Top Speed</p>
                                  </div>
                                </div>
                                
                                <div className="buttonGroup">
                                    <button className='btn1' >Order Now</button>
                                    <button className='btn2' >Demo Drive</button>
                                </div>
                    </div>
        </div>
        <div style={{backgroundImage:'linear-gradient(to top, black 5%, transparent 50%), url(Images/Model-S-Interior-Hero-Desktop-LHD.avif)',backgroundPosition:'center' , width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            <h1 style={{textAlign:'center', color:'white', paddingTop:'40px'}} data-aos="fade-up" data-aos-duration="1400">Interior of the Future</h1>
        </div>

        <div style={{background:'black', padding:'50px 0', width:'100vw'}}>
          <div id="display_flex">
            <img src="Images/MS-Interior-Grid-A-Desktop.avif" data-aos="fade-in" data-aos-duration="1000" />
            <div className="text" data-aos="fade-up" data-aos-duration="1000">
              <h2>Stay Connected</h2>
              <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>
          </div>

          <div id="display_flex2">
            <div className="text" data-aos="fade-up" data-aos-duration="1000">
              <h2>Immersive Sound</h2>
              <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
            </div>
            <img src="Images/Model-S-interior.png" data-aos="fade-in" data-aos-duration="1000"/>
          </div>

          <div id="display_flex">
            <img src="Images/MS-Interior-Grid-D-Desktop.avif"/>
            <div className="text">
              <h2>Room for Everything</h2>
              <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too. Compare Models</p>
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default Model_S
