import { fetchAstroEntries } from "./content/api"
import React from "react"
import { getImageSource } from "./utils/images";

function App() {
  const [image, setImage] = React.useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src="https://s3.amazonaws.com/static.graphemica.com/glyphs/i500s/000/010/229/original/0058-500x500.png?1275328238" alt="logo" className="w-24 h-24 mb-4" />
        <div className="text-2xl text-rose-400">bumversal</div>
        <img src="https://drive.google.com/file/d/15b1nLXTbp5VUZ43w_jyArH3_Z6P-Kkj1/view?usp=sharing"/>
        <button onClick={async () => {
          const entries = await fetchAstroEntries();
          setImage(getImageSource(entries[0].photo));
        }}>api test</button>
        {image && <img src={image} alt="api test" />}
      </div>
    </>
  )
}

export default App
