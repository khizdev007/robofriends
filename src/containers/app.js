import react from 'react'
import CardParent from "../components/cardParent"
import './app.css'
import Search from '../components/search'
import info from '../cardinfo'
import Scroll from '../components/Scroll'

class App extends react.Component{
    
    constructor(){
        super()
        this.state = {
            info : info,
            searchText :""
        }
    }

     searchChange = (event) => {
        this.setState({searchText:event.target.value})
            
    }
     
    render(){
        let changeinfo = this.state.info.filter((info_single)=>{
            return ( info_single.name.toLocaleLowerCase().includes(this.state.searchText.toLocaleLowerCase())
            )
        });
   
    return(
   
   <div>  
   
         <h1 className='robo_heading'>RoboFriends</h1>
         <Search search={this.searchChange}/>
         <Scroll>
         <CardParent  changeinfo={changeinfo}/>
         </Scroll>
        </div>
    )
}
}
export default App;