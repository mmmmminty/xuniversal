import { BrowserRouter, Route, Routes } from "react-router-dom"
import ComingSoon from "./components/main/ComingSoon"
import Navbar from "./components/main/Navbar"
import AstroEntry from "./pages/AstroEntry"
import FilmEntry from "./pages/FilmEntry"
import DslrEntry from "./pages/DslrEntry"
import AstroLanding from "./pages/AstroLanding"
import FilmLanding from "./pages/FilmLanding"
import DslrLanding from "./pages/DslrLanding"
import Collection from "./pages/Collection"
import NotFound from "./pages/NotFound"

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <ComingSoon />
                <Routes>  
                    <Route path="/astro/:entryId" element={<AstroEntry />} />
                    <Route path="/film/:entryId" element={<FilmEntry />} />
                    <Route path="/dslr/:entryId" element={<DslrEntry />} />
                    <Route path="/astro" element={<AstroLanding />} />
                    <Route path="/film" element={<FilmLanding />} />
                    <Route path="/dslr" element={<DslrLanding />} />
                    <Route path="/collection/:collectionId" element={<Collection />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
