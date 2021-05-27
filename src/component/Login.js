import React ,{Component } from 'react'
import { connect } from 'react-redux'
import {handleLogin} from '../actions/shared'

class Login extends Component {
    state = {
       loginUser: 'none'
    }
    handleChange = (e)=>{
        const loginUser = e.target.value
       this.setState({
           loginUser
       })
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        const {dispatch} = this.props
        const {loginUser} = this.state
        dispatch(handleLogin(loginUser))
        this.setState({
            loginUser
        })
    }
  
    render(){
        console.log(this.props.usersIdsList)
        return(
            <div className='container '>
                    <h1 className="loginTitle" >Login page </h1>
                    <div className='login-box'>
                    <form onSubmit={this.handleSubmit}>
                             <span> please select a user</span>
                              <select
                              value={this.state.loginUser}
                               onChange={this.handleChange}
                               >
                                      <option value={"none"}> none </option>
                                      {this.props.usersIdsList.map((id)=>(
                                            <option key={id} value={id} > {id} </option>
                                          ) 
                                      )}
                                  </select>
                                <button type="submit" value='login' className='btn btn-primary btn-block'
                                disabled={this.state.loginUser=== 'none'}> Login </button>
                                </form>
                                
                               


                    </div>

              
            </div>
        )
    }
}
function mapStateToProps({users , authedUser}){
    return{
        usersIdsList :Object.keys(users),
         users : users ? users:null ,
         authedUser: authedUser
    }
}
export default connect(mapStateToProps)(Login);
