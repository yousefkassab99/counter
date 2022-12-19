import React from 'react'
import Counter from '../Count/Counter'
import "./Home.css"
function Home() {
  return (
    <div className='home'>
        <Counter/>
        <Counter/>
        <Counter/>
    </div>
  )
}

export default Home