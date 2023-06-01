import './App.css';
import { BrowserRouter, Routes ,Route  } from 'react-router-dom';
import Home from './Components/Home';
import Model_3 from './Components/Model_3';
import Model_S from './Components/Model_S';
import Model_X from './Components/Model_X';
import Model_Y from './Components/Model_Y';
import Footer from './Components/Footer';
import LogIn from './Components/LogIn';

function App() {
  return (
    <> 
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Model_S' element={<Model_S/>} />
            <Route path='/Model_3' element={<Model_3/>} />
            <Route path='/Model_X' element={<Model_X />} />
            <Route path='/Model_Y' element={<Model_Y/>} />
            <Route path='/LogIn' element={<LogIn/>} />
      </Routes>
    </BrowserRouter>
        
    
    </>
  );
}

export default App;
