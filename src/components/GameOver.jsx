import React from 'react'

export default function GameOver (props) {

  return (
    <>
      <button id = 'snooze-button' onClick = {() => props.stop()}>Snooze</button>
    </>
  )
}