import React, { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Subscription successful!');
    } else {
      alert(`Subscription failed: ${data.error}`);
    }

    setEmail('');
    setName('');
  };
  
  
  
  return (
    <div className='p-5 min-h-screen min-w-full bg-gradient-to-br from-green-100 to-gray-500 text-slate-900 flex flex-col items-center gap-5'>
      <h1 className='text-3xl mt-12 font-extrabold text-center'>Subscribe to our Newsletter!</h1>
      <h2 className='mt-5 text-xl mx-12'>Sign up now to receieve updates from our mailing list</h2>
      <form className='flex flex-col items-center gap-5 mt-24' onSubmit={handleSubmit}>
        <label>Enter Name and Email to sign-up</label>
        <input className='border border-black p-1 rounded w-48' type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='border border-black p-1 rounded w-48' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='border border-black p-1 rounded w-24 bg-white' type="submit" />
      </form>
    </div>
  )
}

export default App
