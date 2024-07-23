import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-5 min-h-screen bg-pink-300 text-purple-900 flex flex-col items-center'>
      <h1 className='text-3xl mt-12'>Subscribe to our Newsletter!</h1>
      <form className='flex flex-col gap-5 mt-24'>
        <label>Enter Name and Email to sign-up</label>
        <input className='border border-black p-1 rounded w-48' type="text" placeholder='Full Name' />
        <input className='border border-black p-1 rounded w-48' type="email" placeholder='Email' />
        <input className='border border-black p-1 rounded w-24 bg-white' type="submit" />
      </form>
    </div>
  )
}

export default App
