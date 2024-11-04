import React from 'react'
import {BrowserRouter as Router,Routes ,Route, Navigate} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import {ToastContainer} from 'react-toastify';
import Profile from './Components/Profile';
import { auth } from './Components/firebase';
import {useState,useEffect} from 'react'
import ForgotPassword from './Components/ForgotPassword';
import Wikipedia from './Components/Wikipedia';
const App = () => {
  const [user,setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    }
    )
  })
  return (
    <div>
      <Router>
        <div className='App'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Routes>
                <Route path='/' element={user ? <Navigate to='/profile'/> :<Login/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/wikipedia' element={<Wikipedia/>}/>
              </Routes>
              <ToastContainer/>
            </div>

          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
