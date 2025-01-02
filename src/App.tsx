import { Outlet } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/ui/navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Button> Hello World </Button>

      <Outlet/>
      
    </>
  )
}

export default App
