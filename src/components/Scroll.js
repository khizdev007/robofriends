import React from 'react'

const Scroll = (props)=>{
    return(<div style={{overflowY:'scroll', height:'90vh', margin:'50px', width:'90%' }}> 
        {props.children}
    </div>
)    
}
    

export default Scroll;