import { useParams } from "react-router-dom";
import { useState } from "react";

function AstroEntry() {
    const params = useParams();
    const [entry, setEntry] = useState(null);

    return (
        <>
            <div className="flex justify-center space-around items-center align-center below-nav ">
                <div className="grid grid-cols-1 grid-rows-20">
                    <h1> Hello!!! </h1>
                </div>
                <img src="/src/assets/placeholders/astro" />
            </div>
        </>
    );
}

export default AstroEntry;