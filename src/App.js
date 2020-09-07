import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter'
import AlarmImage from './alarm.jpg'

export default function App() {
  const [targetNum, newTarget] = useState(Math.floor(Math.random() * 10) + 1)
  const [count, newCount] = useState(0)
  const [gameOver, setGameOver] = useState(null)

  // useEffect(() => {
  //   console.log('useffect occurred')
  //   checkTargetReached(targetNum, count)
  // })

  function reset() {
    getNewTargetNum()
    setGameOver(null)
  }

  function getNewTargetNum() {
    const range = Math.floor(Math.random() * 3) + 1
    let target
    if (range === 1) {
      target = Math.floor(Math.random() * 5) + 1
    } else {
      target = Math.floor(Math.random() * 6) + 5
    }
    newTarget(target)
    newCount(0)
  }

  function incrementCount(count) {
    ++count
    newCount(count)
    checkTargetReached(targetNum, count)
  }

  function checkTargetReached (target, count) {
    if(count === target){
      setGameOver('You Lose!')
      getNewTargetNum()
      newCount(0)
    } else {
      setGameOver(null)
    }
  }

  return (
    <div className="App">
      {/* <Counter target={targetNum} /> */}
      <p>Count: {count}</p>
      <p>{gameOver}</p>
      {/* <button onClick={() => getNewTargetNum()}>Change Target</button> */}
      {/* <button onClick={() => incrementCount(count)}>Increment Count</button> */}
      <br/><br/>
      <img className = 'alarm-image'
       src = {AlarmImage} 
       alt ='Alarm Clock Icon'
       onMouseDown={() => incrementCount(count)}
       />
    </div>
  );
}
