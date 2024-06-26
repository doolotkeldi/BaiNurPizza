import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './components/Layout/Layout'
import AboutPage from './pages/AboutPage'
import Basket from './components/Basket/Basket'

function App() {


  return (
    <>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/basket' element={<Basket/>}/>
    </Route>
  </Routes>
    </>
  )
}

export default App
