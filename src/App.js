// import About from "./components/About";
import Navbar from "./components/Navbar";
import React,{useState} from "react";
import TextUtiles from "./components/TextUtiles";
import Alert from "./components/Alert";


function App() {
  
  const toggelMode = ()=>{
    if(mstyle.color==='black'){
      document.body.style.backgroundColor = '#112c44';
      setMstyle({color:'white',backgroundColor:'#112c44'});
      showAlert('Dark Mode Enabeled','success');
    }
    else{
      document.body.style.backgroundColor = 'white';
      setMstyle({color:'black',backgroundColor:'white'})
      showAlert('Light Mode Enabeled','success');
    }
  }

  const showAlert=(msg,type)=>{
    setalert({msg:msg, type:type});
    setTimeout(() => {
      setalert(null);
    }, 2000);

    // setInterval(() => {
    //   setalert({msg:'Try More',type:""});
    // }, 4000);
  }
  
  const [mstyle, setMstyle] = useState({color:'black', backgroundColor:'white'});
  const [alert, setalert] = useState(null);
  return (
  <>
{/* Nav Bar Section */}
    <div className="container-fluid my-1">
      <Navbar home={'Home'} toggelMode={toggelMode} style={mstyle}/>
    </div>
{/* Alert Section */}
    <div className="container-fluid my-1">
      <Alert alert={alert}/>
    </div>
    <div className="container">
      <TextUtiles style={mstyle} alert={showAlert}/>
    </div>
    {/* <div className="container my-2">
      <About style={mstyle} />
    </div> */}
  </> 
  );
}
export default App;
