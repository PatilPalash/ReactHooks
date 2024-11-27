import React, { useContext } from 'react'
import {ExContext} from "../Context/ExContext"

const Footer = () => {
    const {phone,name} = useContext(ExContext)
    return (
        <div>
            <h1>Footer</h1>
            <div>phone:{phone} </div>
            <div>name:{name} </div>
        </div>
    )
}

export default Footer