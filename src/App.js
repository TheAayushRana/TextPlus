import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)

  // Function to ShowAlert like Success: ________
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  // Black Dark Mode
  const [mode, setMode] = useState("light")
  const checkMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
      showAlert("DarkMode", "success")
      // document.title="TextUtils DarkMode is Enabled";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("LightMode", "success")
      // document.title="TextUtils LightMode is Enabled"
    }
  }
  return (
    <div>
      <Router>
      <Navbar name="TextPlus" aboutus="About TextPlus" mode={mode} checkMode={checkMode}/>
        {/* <Navbar checkMode1={checkMode1} mode1={mode1} name="TextUtils" aboutus="About TextUtils" mode={mode} checkMode={checkMode}/> */}
        <div className="container"> 
          <Alert alert={alert} />
        </div>  
      <Routes>
          <Route path="/about" 
            element={
              <About mode={mode} />
            }
          />
          <Route path="/" 
            element={
              <div className="container"> 
                <TextForm showAlert={showAlert} name="TextPlus: Convert the text as you like" mode={mode}/>
                <hr />
                <About mode={mode} />
              </div>  
            }
          />  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
