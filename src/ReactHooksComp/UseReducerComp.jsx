import React from 'react'
import { useReducer, useState } from 'react'

const UseReducerComp = () => {
    // const [count, setCount] = useState(0)
    const initialState = { count: 0 }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'incre': {
                return { count: state.count++ }
            }
            case 'dcre': {
                return { count: state.count-- }
            }
            case 'input': {
                return { count: action.payload }
            }
            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {/* <div>{count}</div> */}
            <div>{state.count}</div>
            {/* <button onClick={() => setCount(prev => prev + 1)}>++</button>
            <button onClick={() => setCount(prev => prev - 1)}>--</button> */}
            <button onClick={() => dispatch({ type: "incre" })}>++</button>
            <button onClick={() => dispatch({ type: "dcre" })}>--</button><br />
            <input type="number" onChange={(e) => dispatch({ type: 'input', payload: Number(e.target.value) })} value={state.count}/>
        </>
    )
}

export default UseReducerComp