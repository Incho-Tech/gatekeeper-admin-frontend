import './App.css'

function App() {

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold '>Welcome to Gatekeeper</h1>
      <p>These are our color pallets which we are using. Please refer to the tailwind.config.cjs file</p>
      <div className='grid grid-cols-5 gap-5 h-1/4 w-1/2 mt-10'>
        <div className='flex justify-center items-center bg-navy h-full w-full'>Navy</div>
        <div className='flex justify-center items-center bg-mint h-full w-full'>Mint</div>
        <div className='flex justify-center items-center bg-white h-full w-full'>White</div>
        <div className='flex justify-center items-center bg-forest h-full w-full'>Forest</div>
        <div className='flex justify-center items-center bg-sky h-full w-full'>Sky</div>
      </div>
    </div>
    </>
  )
}

export default App
