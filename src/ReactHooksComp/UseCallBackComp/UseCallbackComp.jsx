import React, { useCallback, useState } from 'react'
import Header from './Header/Header'

const UseCallbackComp = () => {
    const [count, setCount] = useState(0);

    // its render every time when we comp load and 
    // every create new instance in memory
    // to avoid this we need to usecallback
    // const newFn = () => { }

    // with empty [] depen we get get this function ijn header only ones 
    // const newFn = useCallback(() => { },[])

    // with empty [count] depen but we add then when dens update this fun also update in header comp
    const newFn = useCallback((count) => { }, [count])



    return (
        <>
            <div>
                <Header newFn={newFn} />
                <h1>{count}</h1>
                <button onClick={() => setCount(prev => prev + 1)}>Click Here</button>
            </div>
        </>
    )
}

export default UseCallbackComp