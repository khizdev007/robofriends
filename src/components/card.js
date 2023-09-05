import React from 'react'
import './card.css'

function Card({info}){
        return(
                <div>
                <div className='card grow dib ma2 pa3 bw2'>
                  <img src={info.image}></img>  
                     <h1>{info.name}</h1>
                     <p>Lorem ispum emet hello there ispum the num is the bum tan tana tan</p>
                </div>
                </div>
        )
      
           
       }
           
        
    


export default Card