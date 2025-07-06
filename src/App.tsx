import { BrowserRouter, Routes } from "react-router-dom"
import Sidebar from "./components/main/Sidebar"
import MainContainer from "./components/main/MainContainer"
import { LandingScroll } from "./components/main/LandingScroll"
import { useEffect } from "react";
import { fetchAllContent } from "./content/api";

function App() {
  useEffect(() => {
    const load = async () => {
      await fetchAllContent();
    };
    load();
  }, []); 

  return (
    <>
      <BrowserRouter>
          <MainContainer>
            <LandingScroll />
          </MainContainer>
          <Sidebar/>
          <Routes>  
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
