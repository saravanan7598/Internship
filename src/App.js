
import './App.css';
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import FIndDoctorpage from './components/FIndDoctorpage';
import About from './components/About';
function App() {
  return (
      <div> 
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route  path='/finddoctor' element={ <FIndDoctorpage/>}/>
                    <Route  path='/about' element={   <About/>}/>
                 </Routes> 
               
      </BrowserRouter>
      </div>
     
  );
}

export default App;
