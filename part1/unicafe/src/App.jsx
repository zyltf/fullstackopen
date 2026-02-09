import {useState} from 'react'

const Stats = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100
  
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodBtn = () => setGood(good+1)
  const handleNeutralBtn = () => setNeutral(neutral+1)
  const handleBadBtn = () => setBad(bad+1)

  


  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleGoodBtn}>Good</button>
      <button onClick={handleNeutralBtn}>Neutral</button>
      <button onClick={handleBadBtn}>Bad</button>

      <Stats good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
