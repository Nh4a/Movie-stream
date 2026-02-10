import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouter from './Router/MainRouter'
import MainLayout from './Layout/MainLayout'
import MovieDetail from './Page/MovieDetail'
import NavigationBar from './Components/NavigationBar'
import ContactPage from './Page/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <NavigationBar /> */}
     <MainRouter />
     {/* <ContactPage /> */}
     {/* <MovieDetail /> */}
    
    </>
  )
}

export default App
