import React , {Component} from 'react'
import {connect} from 'react-redux'
import {handleReceiveData} from '../actions/shared'
import Nav from "./Nav"
import Login from './Login'
import Dashboad from "./DashBord"
import Leaderboard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import AllQView from './AllQView'
import LoadingBar from 'react-redux-loading'
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleReceiveData())
  }
  render(){
    return(
      <>
      <Router>
      <LoadingBar />
      <div> 
        {this.props.loading === true ?
      <>  <Login /> </>:
       
        
          <>
        <Nav />
        <Switch>
         <Route exact path='/' component={Dashboad}/>
         <Route path="/leaderboard" component={Leaderboard} />  
         <Route path="/add"        component={NewQuestion} />   
         <Route path="/questions/:qid" component={AllQView} />  
         </Switch>
         </>
       
         
       
        
        }
     
      </div>
      </Router>
      </>
    )
  }
}
function mapPropsToState({authedUser}){
  return {
    loading : authedUser === null
  }
}
export default connect(mapPropsToState) (App);
