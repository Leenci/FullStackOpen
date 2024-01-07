const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}
const Content = (props) => {
  const part = props.course.parts
  return (
    <div>
      <Part  part={part[0].part} exercises={part[0].exercises}/>
      <Part  part={part[1].part} exercises={part[1].exercises}/>
      <Part  part={part[2].part} exercises={part[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <div>
      <p> Number of exercises {total}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}


const App = () => {
  const course ={
    name: 'Half Stack application development',
    parts: [
      {part:'Fundamentals of React',    exercises: 10},
      {part:'Using props to pass data', exercises: 7 },
      {part:'State of a component',     exercises: 14}
    ]
  }
  
  
  return (
    <div>
      <Header  course = {course}/>
      <Content course = {course}/>
      <Total   course = {course}/>
    </div>
  )
}

export default App

