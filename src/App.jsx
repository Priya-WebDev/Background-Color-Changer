import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState('olive');

  return (
      
    <div className="flex justify-center  w-full h-screen duration-200 "
    style={{backgroundColor:color}}
    >
    <div className='fixed flex flex-wrap justify-center bg-white mx-2 mt-4 px-2 rounded-xl'>
      <button className="m-2 p-2 rounded-lg"  style={{backgroundColor:'red'}} onClick={(prevColor)=>(setColor('red'))}>red</button>
      <button className="m-2 p-2 rounded-lg"  style={{backgroundColor:'blue'}} onClick={(prevColor)=>(setColor('blue'))} >blue</button>
      <button className="m-2 p-2 rounded-lg bg-green-500" onClick={(prevColor)=>(setColor('green'))} >green</button>
      <button className="m-2 p-2 rounded-lg  bg-yellow-300"  onClick={(prevColor)=>(setColor('yellow'))}>yellow</button>
      <button className="m-2 p-2 rounded-lg  bg-maroon text-white"  onClick={(prevColor)=>(setColor('maroon'))}>maroon</button>
    </div>
    </div>
    
  )
}

export default App
