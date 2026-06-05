
// import { useState } from 'react'

import Card from "./Components/Card"


function App() {
//  const [count, setCount] = useState(0)

// const addValue = ()=>{
 
//   if(count<10){
//  setCount(count+1)
//   }else {
//    alert("Limit Reached")
//   }
// }
// const removeValue = ()=>{
//   if(count>0){
//     setCount(count-1)
//   }else{
//     alert('negative MC')
//   }
// }
  return (
    <div className="flex justify-center align-middle mt-5">
      {/* <h2>Counter</h2>
      <h4>counter value {count}</h4>
      <button onClick={addValue}  >Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button> */}
     
    {/* ------------------------------------------------------------------- */}


 <div className="flex justify-center gap-4">
    <Card username="Karan"/>
    <Card username= 'Samrat'/>
    <Card username= 'Kumar'/>
  
 </div>
   </div>
  )
}

export default App
