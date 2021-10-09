import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import CoursesDetites from './Components/CoursesDetites/CoursesDetites'
import Course from './Components/Course/Course';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
       
        <Router>
        <Header></Header>
        
          <Switch>
            
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route exact path="/">
           <Home></Home>
            </Route>
            <Route  path="/courses">
              <Courses></Courses>
            </Route>
            {/* <Route path="/courses/:courseId">
              <CoursesDetites></CoursesDetites>
            </Route> */}
            <Route path="/about">
              <About></About>
            </Route>
             <Route path="/contact">
                <Contact></Contact>
             </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
       
    </div>
  );
}

export default App;
