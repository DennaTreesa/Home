import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Blog from './components/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>

      <NavBar/>

   

      <Routes>
        <Route path="/denna" element={<Home/>} />
        <Route path="/form" element={<Blog/>} />
      </Routes>


    
      </>

  )
}
export default App
