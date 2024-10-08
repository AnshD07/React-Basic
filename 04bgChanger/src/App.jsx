import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-3">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-full'>
          <button
            className='outline-none rounded-full px-6 py-2 text-3xl text-white shadow-lg'
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >red</button>
          <button
            className='outline-none rounded-full px-6 py-2 text-3xl text-white shadow-lg'
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >olive</button>
          <button
            className='outline-none rounded-full px-6 py-2 text-3xl text-white shadow-lg'
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >purple</button>
          <button
            className='outline-none rounded-full px-6 py-2 text-3xl text-white shadow-lg'
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >pink</button>
          <button
            className='outline-none rounded-full px-6 py-2 text-3xl text-white shadow-lg'
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >yellow</button>
          <button
            className='outline-none rounded-full px-6 py-2 text-3xl text-white shadow-lg'
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("reblackd")}
          >black</button>
          <button
            className='outline-none rounded-full px-6 py-2 text-3xl text-white shadow-lg'
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >green</button>
          <button
            className='outline-none rounded-full px-6 py-2 text-3xl shadow-lg'
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >white</button>
          <button
            className='outline-none rounded-full px-6 py-2 text-3xl shadow-lg'
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
