import React ,{Component} from  'react'
import SelectAnswer from './SelectAnswer'
import AnswerResult from './AnswerResult'
import { connect } from 'react-redux'
import NotFound from './NotFound'
import { formatQuestion } from '../utils/helpers'


class AllQView extends Component{
    render(){
       
        const {question} = this.props;
        if(question === null){
            return <NotFound />
        }
        const {hasAnswered, name,avatar,id,optionOne,optionTwo} = question
        console.log(question)
        
        return(
            <div>
                {hasAnswered 
                ?<AnswerResult
                id={id}
                 name={name} 
                 avatar={avatar} 
                 optionOne={optionOne}
                 optionTwo={optionTwo}
                 authedUser={this.props.authedUser}
                
                />
                :<SelectAnswer />}
            </div>
        )
    }
}
export default  connect((state,{match}) =>{
    const id = match.params.qid
    const question = state.questions[id]
return{
     question : question? formatQuestion(question, state.users[question.author] , state.authedUser): null,
     authedUser:state.authedUser
}
}) (AllQView);
