import React, { useState } from 'react'

const UseStateComp = () => {
    // const counter = useState(0);
    // const setcounter = useState(0)[1];

    // console.log(counter); // here we get the [0,function]
    // console.log(setcounter);

    // const [count, setCount] = useState({
    //   brand: "Ferrari",
    //   model: "Roma",
    //   year: "2023",
    //   color: "red"
    // })
    // const chnagecolor = () => {
    //   setCount((car) => {
    //     return { ...car, color: "blue" }
    //   })
    // }
    const [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(count + 1);
        setCount((prev) => prev + 1); // 1
        setCount((prev) => prev + 1); // 2
        setCount((prev) => prev + 1); // 3
        setCount((prev) => prev + 1); // 4
        setCount((prev) => prev + 1); // 5
    }
    return (
        <>
            {/* <h1>my {count.brand}</h1>
      <div className="card">
        <h2> it is a {count.color} {count.model} from {count.year}</h2>
        <button onClick={chnagecolor}>Blue</button>
      </div> */}
            <h1>count: {count}</h1>
            <button onClick={increaseCount}>Icn</button>
            <button onClick={() => {
                setCount(0);
            }}>Reset</button>
        </>
    )
}

export default UseStateComp