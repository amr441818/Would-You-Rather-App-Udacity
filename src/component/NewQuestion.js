import React , {Component} from  'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component{
    state={
        optionOneText:'',
        optionTwoText:'',
        redirect: false
    }
    handleChanges = (e)=>{
        this.setState({
          [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const {optionOneText,optionTwoText,redirect} =this.state
        const{dispatch,authedUser} = this.props
        dispatch(handleAddQuestion(optionOneText,optionTwoText,authedUser))
        this.setState({
            optionOneText: '',
            optionTwoText: '',
            redirect:true
        })
    }
    
    render(){
        if(this.state.redirect === true){
          return  <Redirect to="/" />
        }
        console.log(`state ${this.state.optionOneText} and ${this.state.optionTwoText}`)
        return(
            <div>
                              <>
                    <div className="">
                   
                       <div className='box-form col-16'>
                       <form onSubmit={this.handleSubmit}>
                      
                       <p className="formSpan">Would You Rather</p>
                    <input 
                    className="form-control  form-block "
                    type='text'
                     placeholder='enter the first question' 
                     id='optionOneText'  
                     onChange={this.handleChanges}
                     value={this.state.optionOneText}
                    
            
                       /> 
                      <p className="formSpan">or</p>
                      <input 
                    className="form-control form-block"
                    type='text'
                    placeholder='enter the socend question' 
                    id="optionTwoText"    
                    onChange={this.handleChanges}
                    value={this.state.optionTwoText}
                    
            
                        />
           
                       <button className="btn btn-primary btn-block addQues" disabled={this.state.optionOneText==="" ||this.state.optionTwoText==="" }   > 
            Add NewQuestion

            </button>
                            
                        </form>    
                       
                       
                       </div>
                    </div>
                   </>
            </div>
        )
    }
}
export default connect(state=>{
    return {
        authedUser: state.authedUser
    }
}) (NewQuestion)