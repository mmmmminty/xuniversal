import { BrowserRouter, Routes } from "react-router-dom"
import ComingSoon from "./components/main/ComingSoon"
import Navbar from "./components/main/Navbar"

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <ComingSoon />
          <Routes>  
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
