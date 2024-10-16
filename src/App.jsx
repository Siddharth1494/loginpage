import { Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import SignUp from './component/SignUp'
import BackgroundImage from './assets/bg.jpg'
import ProtectedRoute from './component/ProtectedRoute'
import Home from './component/Home'

function App() {

  return (
    <div 
      className="relative flex items-center justify-center h-screen w-full bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route to="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route> 
      </Routes>
    </div>
  )
}

export default App
