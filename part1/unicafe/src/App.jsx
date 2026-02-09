import {useState} from 'react'

const StatisticLine = ({text, value}) => {return <><p>{text} {value}</p></>}

const Button = ({text, onClick}) => {return <><button onClick={onClick}>{text}</button></>}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  if (all === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  
  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
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
      <Button text="Good" onClick={handleGoodBtn} />
      <Button text="Neutral" onClick={handleNeutralBtn} />
      <Button text="Bad" onClick={handleBadBtn} />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
