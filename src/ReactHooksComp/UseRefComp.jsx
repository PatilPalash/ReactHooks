import React, { useEffect, useRef, useState } from 'react'

const UseRefComp = () => {
    const [value, setValue] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        // setCount(prev => prev + 1) 
    });

    const Count = useRef(0);
    useEffect(() => {
        Count.current = Count.current + 1
    });

    const inputElem = useRef();
    const btnClick = () => {
        console.log(inputElem.current);
        inputElem.current.style.background = 'blue'
    }

    return (
        <>
            <div>
                <div>
                    <button onClick={() => { setValue(prev => prev - 1) }}>-1</button>
                    <h1>{value}</h1>
                    <button onClick={() => { setValue(prev => prev + 1) }}>+1</button>
                    <h1>Render Count1: {count}</h1>
                    <h1>Render Count2: {Count.current}</h1>
                </div>
                <div>
                    <input type="text" ref={inputElem} />
                    <button onClick={btnClick}>Click Here</button>
                </div>
            </div>
        </>
    )
}

export default UseRefComp