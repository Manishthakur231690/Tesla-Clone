import React from 'react';
import styled from 'styled-components';
import Header from './header';
import SingleHomePage from './SingleHomePage';


const Home = () => {

  return (
    <>
        <Header />
        <SingleHomePage title='Model S' description='Order online for Touchless delivery' bgImg='Images/teslaS.avif'/>
        <SingleHomePage title='Model 3' description='Order online for Touchless delivery' bgImg='Images/tesla3.avif'/>
        <SingleHomePage title='Model X' description='Order online for Touchless delivery' bgImg='Images/teslaX.avif'/>
        <SingleHomePage title='Model Y' description='Order online for Touchless delivery' bgImg='Images/teslaY.avif'/>
        <SingleHomePage title='Solar Panels' description='Lowest Cost Solar Panels in India' bgImg='Images/solarpanel.avif'/>
        <SingleHomePage title='Solar Roof' description='Produce Clean Energy From Your Roof' bgImg='Images/solar-roof.jpg'/>
    </>
  )
}




export default Home
