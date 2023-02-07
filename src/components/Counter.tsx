import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(counter + 1)
  }
  return (
    <div className={classes.div}>
      <h1>{counter}</h1>
      <button onClick={handleClick}>increment</button>
    </div>
  )
}
