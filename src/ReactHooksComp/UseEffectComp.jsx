import React, { useEffect, useState } from 'react'

const UseEffectComp = () => {

    const [count, setcount] = useState(0);
    
    // useEffect(() => {
    //     console.log("above settimeout")
    //     setTimeout(() => {
    //         console.log("inside settimeout")
    //         setcount(count => count + 1)
    //     }, 2000)
    // })

    // useEffect(() => {
    //     console.log("above settimeout")
    //     setTimeout(() => {
    //         console.log("inside settimeout")
    //         setcount(count => count + 1)
    //     }, 2000)
    // },[])

    useEffect(() => {
        console.log("above settimeout")
        setTimeout(() => {
            console.log("inside settimeout")
            setcount(count => count + 1)
        }, 2000)
    },[count])


    return (
        <>
            <div>
                <h1>l've rendered {count} times!</h1>
            </div>
        </>
    )
}

export default UseEffectComp