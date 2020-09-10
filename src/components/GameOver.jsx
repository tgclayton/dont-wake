import React from 'react'

export default function GameOver (props) {

  return (
    <>
      <button onClick = {() => props.stop()}>Snooze</button>
    </>
  )
}