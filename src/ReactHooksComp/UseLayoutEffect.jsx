import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {

    useEffect(() => {
        console.log("Messge from useEffect")
    }, [])
    useLayoutEffect(() => {
        console.log("Messge from useLayoutEffect")
    }, [])

    return (
        <>
            <h2>test Messge</h2>
            {Array(100).fill('').map((item, index) => (
                <li key={index}>{Math.pow(Math.random(), 10)}</li>
            ))}
        </>
    )
}

export default UseLayoutEffect