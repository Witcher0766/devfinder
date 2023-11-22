
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Profile from './component/Profile';
import {ToastContainer} from 'react-toastify';
import { useContext } from 'react';
import ThemeContext from './context/themeContext';

function App() {
 

  const {theme} = useContext(ThemeContext);

  return (

    <>
    <BrowserRouter>
     <ToastContainer/>
    <section data-theme={theme}> 
   <div className='main-container'>
    <Profile/>
    </div>
   </section>
    </BrowserRouter>
    </>
  );
}

export default App;
