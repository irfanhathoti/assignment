import React from 'react'
import '../style.css'
import Rightcard from './Rightcard'
import Leftcard from '../Leftcard'
import { useState } from 'react'
const Header =  () =>
{
    const [aToggle, setIsToggle] = useState(false)
    const [thisToggle, setThisToggle] = useState(false)

    return(
       <div className='body'>
        <h1 className='head'>Styling Using Functional and Claas Component</h1>
        <div className='parent'>
            <button className ='btn1' onClick={() =>setIsToggle(!aToggle) }>To See Styling In Functional Components</button>
            <button className ='btn2'onClick={() =>setThisToggle(!thisToggle)}>To See Styling In Class Components</button>
            </div>
        <div className='parent1'>
            <div onClick={() =>setIsToggle(!aToggle) }  >{aToggle && < Leftcard /> }</div>
            <div  onClick={() =>setThisToggle(!thisToggle)}>{thisToggle && <Rightcard/>}</div>
       </div>
       </div>

    )
}
export default Header;