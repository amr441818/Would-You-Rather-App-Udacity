import React ,{Component} from 'react'
import { connect } from 'react-redux';
import{ withRouter } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers';
import {handleAddAnswer} from '../actions/shared'

class SelectAnswer extends Component{
    state={
        answer:'optionOne'
    }
    handleChange = (e) =>{
        this.setState({
            answer: e.target.value
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        const {dispatch,authedUser} =this.props
        const{id} = this.props.question
        const {answer} =this.state
        dispatch(handleAddAnswer(authedUser, id, answer))
        this.setState({
            answer: 'optionOne'
        })

    }
    render(){
        const {question} =this.props
        const {name ,avatar,optionOne, optionTwo} =question
        
        console.log(this.state.answer)
        return(
           
            <div className="">
            
            <div className='box col-6'>
                
                <div className='col-5 '>
                <h6> {`Ask by : ${name}`}</h6>
                  <img
                   src={avatar}
                   alt={`avatar to ${name}`}
                  />
                </div>
                <div className="col-6 box-info">
                      <h5>Would You Rather</h5>
                      <form onSubmit={this.handleSubmit}>
                        <div>
                            <input id='optionOne' type='radio' name='answer' value='optionOne'  checked={this.state.answer === 'optionOne'} onChange={this.handleChange}/>
                            <label htmlFor='optionOne'>{optionOne.text}</label>
                        </div>
                        <div>
                            <input id='optionTwo' type='radio' name='answer' value='optionTwo'  checked={this.state.answer === 'optionTwo'} onChange={this.handleChange} />
                            <label htmlFor='optionTwo'>{optionTwo.text}</label>
                        </div>

                        <button type='submit' className='btn btn-primary btn-form'>submit</button>

                      </form>

                      
                  </div>
               </div>
               </div>
           
        )
    }
  
    }
 
    export default withRouter(connect((state,{match})=>{
        const id = match.params.qid
        const question = state.questions[id]
        return{
            authedUser :state.authedUser,
            question : question ? formatQuestion(question, state.users[question.author] , state.authedUser): null
        }
    })(SelectAnswer)) ;
    