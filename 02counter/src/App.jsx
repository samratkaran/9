
import { useState } from 'react'
import './App.css'

function App() {
 const [count, setCount] = useState(0)

const addValue = ()=>{
 
  if(count<10){
 setCount(count+1)
  }else {
   alert("Limit Reached")
  }
}
const removeValue = ()=>{
  if(count>0){
    setCount(count-1)
  }else{
    alert('negative MC')
  }
}
  return (
    <>
      <h2>Counter</h2>
      <h4>counter value {count}</h4>
      <button onClick={addValue}  >Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
