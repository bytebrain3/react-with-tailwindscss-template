import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="text-6xl font-bold bg-zinc-800 text-white dark:text-white dark:bg-zinc-800">
            react template with tailwindscss 
        </div>
    </>
  )
}

export default App
