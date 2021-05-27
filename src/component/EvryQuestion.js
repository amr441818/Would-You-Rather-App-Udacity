import React,{Component} from 'react'
import { connect } from 'react-redux'
import {Redirect , NavLink} from 'react-router-dom'
import {formatQuestion} from "../utils/helpers"
class EvryQuestion extends Component{
    render(){

        const {question} = this.props
        const {id,name, avatar, optionOne} =question
        return(
            <>
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
                      <p>{`...${optionOne.text}`}</p>

                      <NavLink to={`/questions/${id}`}>viw..pull </NavLink>
                  </div>
                

                </div>
             </div>
            </>
                
        )
    }
   

} 
function mapStateToProps({authedUser , users , questions} , {id}){
     const question = questions[id]    
    return{

        question : question ? formatQuestion(question , users[question.author] , authedUser) :null
    }
}


export  default connect(mapStateToProps)(EvryQuestion);