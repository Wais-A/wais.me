import './App.scss'
import { Route, Routes} from 'react-router-dom';

import Home from "./Components/Home/Home"
import Work from "./Components/NavigationLinks/Work";
import Contact from "./Components/NavigationLinks/Contact";
import About from './Components/NavigationLinks/About'
import Nav from "./Components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Work" element={<Work/>} /> 
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Nav/>
    </div>
  )
}

export default App
