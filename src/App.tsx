import { BrowserRouter, Routes } from "react-router-dom"
import Sidebar from "./components/main/Sidebar"
import MainContainer from "./components/main/MainContainer"
import { CollectionView } from "./components/main/CollectionView"
import { useEffect } from "react";
import { fetchAllandStore } from "./content/session";

function App() {
  useEffect(() => {
    fetchAllandStore();
  }, []); 

  return (
    <>
      <BrowserRouter>
          <MainContainer>
            <CollectionView />
          </MainContainer>
          <Sidebar/>
          <Routes>  
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
