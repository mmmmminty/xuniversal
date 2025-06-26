import { BrowserRouter, Routes } from "react-router-dom"
import ComingSoon from "./components/main/ComingSoon"
import Navbar from "./components/main/Navbar"
import Sidebar from "./components/main/Sidebar"

function App() {
  return (
    <>
      <BrowserRouter>
          {/* <Navbar />
          <ComingSoon /> */}
          <Sidebar />
          <Routes>  
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
