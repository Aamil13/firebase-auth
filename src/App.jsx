import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from "./Component/ProtectedRoute"
import Login from "./Pages/Login"
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';


function App() {



  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Register/>}/>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      </AuthContextProvider>
      </BrowserRouter>
  )
}

export default App
