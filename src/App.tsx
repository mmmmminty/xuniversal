import { BrowserRouter, Routes } from "react-router-dom"
import Sidebar from "./components/main/Sidebar"

function App() {
  return (
    <>
      <BrowserRouter>
          <Sidebar />
          <Routes>  
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
