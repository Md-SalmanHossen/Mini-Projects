
import React, { useState } from 'react';

const App = () => {
  const [counter,setCounter]=useState(0);
  return (
    <div className='text-center bg-gray-200 p-6'> 
        <h2 className='bg-indigo-400 p-3 text-white text-3xl'>Counter using useState() Hook</h2><br />
        <h3 className='text-2xl'>My Clicking Number is : {counter}</h3><br />
        <button onClick={()=>{setCounter(counter+1)}} className='p-2 rounded-lg ml-3 bg-green-400'>Increment</button>
        <button onClick={()=>{setCounter(0)}} className='p-2 rounded-lg ml-3 bg-red-400'>Reset</button>
        <button onClick={()=>{setCounter(counter-1)}} className='p-2 rounded-lg ml-3 bg-yellow-400'>Decrease</button><br /><br />
    </div>
  );
};

export default App;