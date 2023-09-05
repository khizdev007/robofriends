import React from 'react'
import '../containers/app.css'

const Search = ({search})=>{

    return(
        <div>
      <center> 
          <input type='Search' placeholder='search Robots' onChange={search}/>
      </center>
        </div>
    )
}
export default Search