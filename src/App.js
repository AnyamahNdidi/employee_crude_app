import logo from './logo.svg';
import './App.css';
import Header from "./component/Header"
import {BrowserRouter as  Router, Route, Routes} from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Todo from "./component/Todo"

function App() {
  return (
   <Router>
     <Header/>
     <Routes>
       <Route path="" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="Todo" element={<Todo/>}/>
     </Routes>
   </Router>
  );
}

export default App;
