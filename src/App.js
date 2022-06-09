import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import React,{ useState } from 'react';
import Alert from './components/Alert';
import { Routes, Route } from "react-router-dom";



let name="Harry";
function App() { 
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

const toggleMode = ()=>{
  if(mode==='dark')
  {
    setmode("light")
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been set","success")
  }else{
    setmode('dark')
    document.body.style.backgroundColor='#0a2a4e'
    showAlert("Dark mode has been set","success")
  }
}

const showAlert= (message,type)=>{
  setalert({
  message:message,
  type:type
}
)

}

setTimeout(() => {
  setalert(null);
}, 4000);


  return (

    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />

    <Alert alert={alert} />
    <div className="container">
    <Routes>
    <Route exact path="/" element={<TextForm title="Enter text to analyze below" mode={mode} showAlert={showAlert}/>} />
    <Route exact path="/about" element={<About />} />   
  </Routes>
  </div>
  </>


//     <div> 
     
// <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />

// <Alert alert={alert} />

// <Router>
// <Switch>
//   <Route exact path="/" component={() => <TextForm title="Enter text to analyze below" mode={mode} showAlert={showAlert}/>}/>
//    <Route exact  path="/about" component={About}/>  
 
// </Switch>

// </Router> 
// </div>

  );
}

export default App;
