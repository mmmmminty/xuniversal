import { BrowserRouter, Routes } from "react-router-dom"
import Sidebar from "./components/main/Sidebar"
import { MainContainer } from "./components/main/MainContainer"

function App() {
  return (
    <>
      <BrowserRouter>
          <Sidebar />
          {/* <MainContainer /> */}
          <Routes>  
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
