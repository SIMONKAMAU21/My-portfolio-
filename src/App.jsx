import React from 'react'
 import Navbar  from './Layout/Navbar'
 import Home from './Pages/home/Home'
 import About from './Pages/projects/About'
 import Services from './Pages/services/Services'
import './App.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='About' element={<About/>} />
<Route path='Services' element={<Services/>} />

</Routes>
</BrowserRouter>

</>

  )



  
  

}

export default App