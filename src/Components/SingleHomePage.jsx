import React, {useEffect} from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import './header.css';



const SingleHomePage = (props) => {

    // ******************  AOS Scroll Animation  ***************************
    useEffect(() => {
        AOS.init();
      }, [])

  return ( 
        <>
                <Wrap id='Single_Page_con' bg={props.bgImg}>
                    <div className='item_text'>
                                <h1 data-aos="fade-up" data-aos-duration="1000">{props.title}</h1>
                                <h3 data-aos="fade-up" data-aos-duration="1500">{props.description}</h3>
                                <div className="buttonGroup">
                                    <button className='btn1' >Order Now</button>
                                    <button className='btn2' >Demo Drive</button>
                                </div>
                                <div class="arrow bounce">
                                        <i class="fa-solid fa-chevron-down"></i>
                                </div>
                    </div>
                </Wrap>
        
        </>
  )
}

const Wrap = styled.div`
    background-image: ${props => `url("${props.bg}")`};
`;


export default SingleHomePage
