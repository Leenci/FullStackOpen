import { useState } from "react";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const anecdotes = [
    {body: 'If it hurts, do it more often.', vote:1},
    {body: 'Adding manpower to a late software project makes it later!', vote:0},
    {body: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote:0},
    {body: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote:0},
    {body: 'Premature optimization is the root of all evil.', vote:7},
    {body: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote:0},
    {body: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', vote:0},
    {body: 'The only way to go fast, is to go well.', vote:9}
]
const copy = [... anecdotes]


const Anecdote = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <h2>{props.body} </h2>
        <h3> has {props.vote} votes</h3> 
        </div>
    )
}

const App = () => {
    
    const initialState = getRandomInt(copy.length)
    const [selected, setSelected] = useState({
        id: initialState,
        body: copy[initialState].body,
        vote: copy[initialState].vote
    })
    const handleClickNext = () =>{
        const newId = getRandomInt(copy.length)
        setSelected({
            id: newId,
            body: copy[newId].body,
            vote: copy[newId].vote
        })
        console.log(newId)
    }
    const addVote = () => {
        setSelected({
            ...selected,
            vote: selected.vote +=1
        })
        copy[selected.id].vote +=1
        
    }
    const anecdotesMostVote = copy.reduce((prev, current) => (prev && prev.vote > current.vote) ? prev : current)
    return(
        <div>
            <Anecdote title="Anecdote of the day:" body={selected.body} vote={selected.vote} />
            <button onClick={handleClickNext}>Next anecdote</button>
            <button onClick={addVote}>Vote</button>
            <Anecdote title="Anecdote with most votes:" body={anecdotesMostVote.body} vote={anecdotesMostVote.vote}/>
        </div>
    )
}
export default App