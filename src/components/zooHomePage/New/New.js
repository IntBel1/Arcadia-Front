import React from 'react'
import './New.css'

const New = () => {

  return (
    <div className='New'>
        <h1>WHAT SERVICES DO WE HAVE ?</h1>
       
        <div className='containerNew'>
            <div className='left'>
                <h2>Guide Service</h2>
                <p>Our guides share fascinating facts about our animals and their habitats.</p>
                <a href='/services'>See More</a>
            </div>
            <div className='right'>
                <div className='right-top'>
                    <h3>Zoo Shopping</h3>
                    <a href='/services'>Lets find out</a>
                </div>
                <div className='right-bot'>
                    <h3>Zoo Train</h3>
                    <a href='/services'>Lets find out</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New