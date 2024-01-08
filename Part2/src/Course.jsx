const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
}
    const Header = ({name}) => {
        return (
        <div><h1>{name}</h1></div>)
    } 
    const Content = ({parts}) => {
        return (
        <div>{parts.map(part => (<Part key={part.id} name={part.name} ex={part.exercises}/>))}</div>)
    }
    const Part = ({name, ex}) => {
        return (<div><p>{name} {ex}</p></div>)
    }
    
    const Total = ({parts}) => {
        const total = parts.reduce((prev, current) => prev + current.exercises, 0)
        return (
        <div><p><strong>Total of {total} exercises</strong></p></div>)
    }
export default Course