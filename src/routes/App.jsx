import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
// import MicrosoftLogin from '../components/MicrosoftLogin'
function App() {
  const bg={
    background:"#f5f8fd",
    backgroundImage:" url('./intro-bg.jpg')",
  }
  return (
    <>
      <div style={bg}> 
        <Navbar/>
        <Outlet/>
        {/* <MicrosoftLogin/> */}
      </div>
    </>
  )
}

export default App
