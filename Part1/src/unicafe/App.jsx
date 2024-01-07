import { useState } from 'react'

const StatisticLine = (props) =>{
  return(
    <tr>
        <td>{props.text}  </td>
        <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0){
    return(
      <div>
        <h1>Statistics</h1>
        <h3>No feedback given</h3>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <StatisticLine text="Good     " value={props.score.good}/>
        <StatisticLine text="Neutral  " value={props.score.neutral}/>
        <StatisticLine text="Bad      " value={props.score.bad}/>
        <StatisticLine text="Total    " value={props.all}/>
        <StatisticLine text="Average  " value={props.average}/>
        <StatisticLine text="Positive " value={props.positivePercentage + "%"} />
        </tbody>
      </table>
    </div>
    
  )
}
const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const App = () => {
  
  /* guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)*/

 const [score, setScore] = useState({
  good: 0,
  neutral: 0,
  bad: 0
 });
 const all = score.good + score.neutral + score.bad;
 const average = (score.good - score.bad) / all;
 const positivePercentage= (score.good / all) * 100;
 const handleClickGood= () => {
  setScore({
    ...score,
    good: score.good +1
  })}
  const handleClickNeutral=()=>{
    setScore({
      ...score,
      neutral: score.neutral +1
    })
  }
  const handleClickBad=()=>{
    setScore({
      ...score,
      bad: score.bad +1
    })
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text="Good"/>
      <Button handleClick={handleClickNeutral} text="Neutral"/>
      <Button handleClick={handleClickBad} text="Bad"/>

      <Statistics score={score} all={all} average={average} positivePercentage={positivePercentage} />
    </div>
  )
}

export default App
