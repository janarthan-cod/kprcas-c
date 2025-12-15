import Footer from "./components/Footer"
import Header from "./components/Header"
import  Navbar  from "./components/Navbar"
import UseState from "./hooks/UseState"
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Service from "./Page/Service"
import Contact from "./Page/Contact";
import UseEffect from "./hooks/UseEffect";
import Form from "./components/Form";
import  Todo  from "./components/Todo";
const App=()=>{
  return(
    <>
    
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home name="jana" depr="ct" />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/useState" element={<UseState/>}/>
    <Route path="/useeffect" element={<UseEffect/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/todo" element={<Todo/>}/>
    
    
    </Routes>
    </>
  )
}

export default App