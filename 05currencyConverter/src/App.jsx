import BackgroundImage from './assets/image.png'


function App() {
 

  return (
   <div  className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}>
    <h1>hello</h1>
   </div>
  )
}

export default App
