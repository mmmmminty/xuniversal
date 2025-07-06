import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Sidebar from "./components/main/Sidebar";
import MainContainer from "./components/main/MainContainer";
import { LandingScroll } from "./components/main/LandingScroll";
import { useEffect } from "react";
import { fetchAllContent } from "./content/api";
import ViewCollection from "./pages/ViewCollection";
import ViewEntry from "./pages/ViewEntry";

function App() {
  useEffect(() => {
    const load = async () => {
      await fetchAllContent();
    };
    load();
  }, []);

  function CollectionRouteHandler() {
    const { type, collectionTitle } = useParams<{
      type: string;
      collectionTitle: string;
    }>();
    return <ViewCollection type={type || ""} title={collectionTitle || ""} />;
  }

  function EntryRouteHandler() {
    const { type, entryTitle } = useParams<{
      type: string;
      entryTitle: string;
    }>();
    return <ViewEntry type={type || ""} title={entryTitle || ""} />;
  }

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <MainContainer>
                <LandingScroll />
              </MainContainer>
            }
          />
          <Route
            path=":type/collection/:collectionTitle"
            element={
              <MainContainer>
                <CollectionRouteHandler />
              </MainContainer>
            }
          />
          <Route
            path=":type/photo/:entryTitle"
            element={
              <MainContainer>
                <EntryRouteHandler />
              </MainContainer>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
