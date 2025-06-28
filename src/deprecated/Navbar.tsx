export function Navbar() {
    return (
        <>
            <section className={`max-w-full bg-eerie h-[15vh] fixed top-0 left-0 right-0 px-[4%] flex justify-between items-end `}>
                <div className="flex w-full max-w-6xl h-40 text-4xl text-platinum items-end"> 
                    <h1 className="text-platinum text-[300px] mb-8 font-serif mix-blend-difference z-10">X</h1>
                    <h1 className="text-platinum text-3xl mb-5">universal</h1>
                </div>
                <div className="flex w-full mb-5 max-w-6xl h-40 text-2xl text-platinum justify-end items-end space-x-9">
                    <button className="hover:scale-110 transition-transform duration-300"> Home </button>
                    <div className="border-l border-platinum h-10"></div>
                    <button className="hover:scale-110 transition-transform duration-300"> DSLR </button>
                    <div className="border-l border-platinum h-10"></div>
                    <button className="hover:scale-110 transition-transform duration-300"> Astro </button>
                    <div className="border-l border-platinum h-10"></div>
                    <button className="hover:scale-110 transition-transform duration-300"> Film </button>
                    <div className="border-l border-platinum h-10"></div>
                    <button className="hover:scale-110 transition-transform duration-300"> Collections </button>
                </div>
            <div className="h-[5vh] bg-eerie w-full fixed top-[15vh] mix-blend-difference"></div>
            </section>
        </>
    )
}

export default Navbar;