<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/main/Navbar"
import AstroEntry from "./pages/AstroEntry"
import FilmEntry from "./pages/FilmEntry"
import DslrEntry from "./pages/DslrEntry"
import CollectionEntry from "./pages/CollectionEntry"
import AstroLanding from "./pages/AstroLanding"
import FilmLanding from "./pages/FilmLanding"
import DslrLanding from "./pages/DslrLanding"
import CollectionLanding from "./pages/CollectionLanding"
import NotFound from "./pages/NotFound"

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>  
                    <Route path="/astro/:entryId" element={<AstroEntry />} />
                    <Route path="/film/:entryId" element={<FilmEntry />} />
                    <Route path="/dslr/:entryId" element={<DslrEntry />} />
                    <Route path="/collection/:collectionId" element={<CollectionEntry />} />
                    <Route path="/astro" element={<AstroLanding />} />
                    <Route path="/film" element={<FilmLanding />} />
                    <Route path="/dslr" element={<DslrLanding />} />
                    <Route path="/collection" element={<CollectionLanding />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
=======
import { BrowserRouter, Routes } from "react-router-dom"
import Sidebar from "./components/main/Sidebar"
import MainContainer from "./components/main/MainContainer"
import { CollectionView } from "./components/main/CollectionView"

function App() {
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
>>>>>>> deploy
}

export default App
