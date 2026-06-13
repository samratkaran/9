
import { useState } from 'react'
import './App.css'

function App() {
 const [color, setColor] = useState('olive')
const arr = [ 'white', "green" , "orange", "yellow", "blue", "pink", "black"]



  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
    <div className='mt-5  bg-white border-2 rounded-2xl border-amber-950 flex justify-center align-middle gap-8'>
    {arr.map((val)=><button key={val} style={{backgroundColor:val , color:"black", cursor:"pointer"}}  className='border-2 p-1 rounded-2xl m-1 font-bold' onClick={()=>setColor(val)} > {val}</button>)}

    </div>
    <div>
      
    </div>
    </div>
  )
}

export default App
