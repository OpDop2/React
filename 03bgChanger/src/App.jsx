import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 bg-red-500 py-1 rounded-full text-white shadow-lg">Red</button>
            <button onClick={() => setColor("orange")} className="outline-none px-4 bg-orange-500 py-1 rounded-full text-white shadow-lg">Orange</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 bg-yellow-500 py-1 rounded-full text-white shadow-lg">Yellow</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 bg-green-500 py-1 rounded-full text-white shadow-lg">Green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 bg-blue-500 py-1 rounded-full text-white shadow-lg">Blue</button>
            <button onClick={() => setColor("indigo")} className="outline-none px-4 bg-indigo-500 py-1 rounded-full text-white shadow-lg">Indigo</button>
            <button onClick={() => setColor("violet")} className="outline-none px-4 bg-violet-500 py-1 rounded-full text-white shadow-lg">Violet</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
