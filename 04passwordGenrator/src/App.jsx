import { useCallback, useEffect, useRef, useState } from "react"



function App() {
  
  
const [numberAllowed , setNumberAllowed] = useState(false)
const [charAllowed, setCharAllowerd] = useState(false)
const [length, setLenght] = useState(8)
const [passsword, setPassword] = useState("")

const passwordRef = useRef(null)

  const passwordGenrator = useCallback( ()=>{
  let pass = ""
  let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  if(numberAllowed) string+="1234567890"
  if(charAllowed) string+= "!@#$%^&*()_+?><:"

  for (let i = 0; i <= length; i++) {
    let char = Math.floor(Math.random()*string.length +1)
    pass += string.charAt(char)
    
  }
  setPassword(pass)


} ,[numberAllowed, charAllowed,length])

const copyToClipBorad = useCallback(()=>{
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,4) // it is used to select range
  window.navigator.clipboard.writeText(passsword)
}, [passsword])

 useEffect(()=>{
  passwordGenrator()
 }, [numberAllowed, charAllowed, length, passwordGenrator])

  return (
  <>
 <div className="container bg-black w-full h-screen flex justify-center items-center flex-col">
  <p className=" text-6xl text-white capitalize pb-4">password Genrator</p>

  <div className="bg-gray-300 rounded-4xl w-[70%] h-[20%] flex justify-center items-center flex-col gap-3">
    <div className="flex justify-center items-center w-full gap-4">
      <input type="text" readOnly className="bg-white h-8 w-[60%]" value={passsword} ref={passwordRef} />
      <button className="bg-blue-700 text-white p-2 rounded-full cursor-pointer" onClick={copyToClipBorad}>Copy</button>
    </div>
    <div className="gap-5 flex justify-between w-[80%]">
     <div>
       <input type="range" min={8} max={16} value={length} onChange={(e)=>setLenght(e.target.value)} />
      <label> Length: {length}</label>
     </div>
      <div>
      <input type="checkbox"
              defaultChecked = {charAllowed}
      
       onChange={()=>{setCharAllowerd((prev) => !prev)}} />
      <label> character</label>
      
      </div>
      <div>
        <input type="checkbox" type="checkbox"
              defaultChecked = {numberAllowed}
      
       onChange={()=>{setNumberAllowed((prev) => !prev)}} />
        <label htmlFor=""> Number</label>
      </div>
    </div>
  </div>
 </div>
  </>
  )
}

export default App
