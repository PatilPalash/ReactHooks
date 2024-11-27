import React, { useState, useMemo } from 'react'

const UseMemoComp = () => {
    const [number, steNumber] = useState(0)
    const [counter, steCounter] = useState(0)

    function cubeNum(num) {
        console.log('Calculate done!')
        return Math.pow(num, 3)
    }
    // const result = cubeNum(number)
    const result = useMemo(()=>cubeNum(number), [number])



    return (
        <>
            <div>
                <input type="number" value={number} onChange={(e) => { steNumber(e.target.value) }} />
                <h1>Cube of the number: {result}</h1>
                <button onClick={() => steCounter(counter + 1)}>Counter++</button>
                <h1>Counter: {counter}</h1>
            </div>
        </>
    )
}

export default UseMemoComp