import { useState } from 'react';

const Home = () => {
  let [state, setState] = useState(0);

  const increment = () => {
    setState(state + 1);
  };

  const decrement = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };

  return (
    <>
      <div className="h-[92vh] flex flex-col justify-center items-center bg-green-100">
        
        {/* Title moved to the top */}
        <h1 className="mb-4">Demonstrating the use of useState Hook for State Management</h1>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="border rounded-lg p-4 bg-green-500 text-center"
            onClick={increment}
          >
            Increment {state}
          </button>

          <button
            className="border rounded-lg  p-4 bg-green-500 text-center"
            onClick={decrement}
          >
            Decrement {state}
          </button>
        </div>
        
      </div>
    </>
  );
}

export default Home;
