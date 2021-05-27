 import React,{Component}from 'react'
import { connect } from 'react-redux';
 import {NavLink} from 'react-router-dom'
 import {handleLogin} from '../actions/shared'
 class Nav extends Component{
  handleLogOut = ()=>{
    const {dispatch} =this.props;
    dispatch(handleLogin(null))
  }
  
  render(){

  return(
   <>

   
      
 <nav className="navbar navbar-expand-lg navbar-darck">
 
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
  <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to='/' className="navigation" activeClassName='active' >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/add' className="navigation"  activeClassName='active' >
            New question
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/leaderboard' className="navigation"  activeClassName='active' >
            Leaderboard
          </NavLink>
        </li>
      </ul>
       <span className="authed">{`welcome : ${this.props.authedUser}`}</span>
      <button className="btn btn-outline-light "
      onClick={this.handleLogOut}
      >
        Log Out
        </button>
  </div>
</nav>
</>
     )}
 }
 export default connect(state=>{
   return{
     
    authedUser:state.authedUser

  } 
 }) (Nav);
