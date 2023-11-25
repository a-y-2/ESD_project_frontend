import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import AddCourse from './Courses/AddCourse';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import UpdateCourse from './Courses/UpdateCourse';
import ViewCourse from './Courses/ViewCourse';
import Login from './pages/Login';

function App() {

  return(
    <div className='App'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}></Route>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/addcourse" element={<AddCourse/>}/>
            <Route exact path="/updatecourse/:course_id" element = {<UpdateCourse/>}></Route>
            <Route exact path="/viewcourse/:course_id" element={<ViewCourse/>} />
          </Routes>
        
        </Router>
       
    </div>
     
      
    
  ); 
  
}

export default App
