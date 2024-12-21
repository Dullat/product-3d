import { useEffect, useState } from 'react'
import Hero from './componants/Hero'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='h-[9000px]'>
        <div className='fixed top-0 left-0'>
          <Hero />
        </div>
      </div>
    </>
  )
}

export default App
