
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Movies from './component/Movies';
import Favourate from './component/Favourate';

import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Pagination from './component/Pagination';



function App() {
  return (
    
       <>
      
 <BrowserRouter>
          <Navbar></Navbar>
          
          
          
       <Routes>
        <Route path='/' element={<>
        
          <Banner/> 
          <Movies/>
         
        
        </>}/>
        <Route path='/fav' element={<>
        
        <Favourate/>
      
        </>}/>

      </Routes> 
       
      
     
      </BrowserRouter>
      </>
     
      
   
  );
}

export default App;
