import React from 'react'
import Card from './card.js'

import './card.css'
let cardArray = []
const CardParent = ({changeinfo})=>{
    
    return(
        <div className='parent'>
       { cardArray = changeinfo.map((card) => {
         return <Card info={card}/>
     })}
     </div>
     )
}


export default CardParent