import React, { useState } from 'react';
import useSound from 'use-sound'
import alarmSound from './sounds/short-alarm.mp3'
import './App.css';
// import Counter from './components/Counter'
import AlarmImage from './alarm_clock.png'
import { alarmShrink } from './components/animations'
import GameOver from './components/GameOver'

export default function App() {
  const [targetNum, newTarget] = useState(Math.floor(Math.random() * 10) + 1)
  const [count, newCount] = useState(0)
  // const [gameOver, setGameOver] = useState(null)
  const [playAlarm, { stop, isPlaying }] = useSound(alarmSound)

  // useEffect(() => {
  //   console.log('useffect occurred')
  //   checkTargetReached(targetNum, count)
  // })

  // function reset() {
  //   getNewTargetNum()
  //   setGameOver(null)
  // }

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
    if (isPlaying) {
      stop()
    }
    const alarmIcon = document.getElementById('alarm-icon')
    alarmIcon.animate(alarmShrink, 150)
    ++count
    newCount(count)
    checkTargetReached(targetNum, count)
  }

  function checkTargetReached(target, count) {
    if (count === target) {
      // setGameOver('GO BACK TO BED!')
      playAlarm()
      getNewTargetNum()
      newCount(0)
    } else {
      // setGameOver(null)
    }
  }

  const gameOver = isPlaying? <GameOver/>: null 

  return (
    <div className="App flex">
      {/* <Counter target={targetNum} /> */}
      {/* <p>Count: {count}</p> */}
      {/* <button onClick={() => getNewTargetNum()}>Change Target</button> */}
      {/* <button onClick={() => incrementCount(count)}>Increment Count</button> */}
      <br /><br />
      <div style={{ height: '60%' }}>
        <div style={{ height: '250px', width: '250px', textAlign: 'center' }}>
          <img id='alarm-icon' className='alarm-image'
            src={AlarmImage}
            alt='Alarm Clock Icon'
            onMouseDown={() => incrementCount(count)}
          />
        </div>
      </div>
      <div style={{ height: '40%' }}>
        <p>{gameOver}</p>
      </div>
    </div>
  );
}
