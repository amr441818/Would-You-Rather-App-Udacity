import{ showLoading,hideLoading} from 'react-redux-loading'
import {saveQuestion} from '../utils/api'
export const RECEIVE_QUISTIONS = 'RECEIVE_QUISTIONS'
export const  ADD_QUESTION = 'ADD_QUESTION'
export const  ADD_QTOUSER = 'ADD_QTOUSER'
export const  ADD_ANSWERTOQUES = "ADD_ANSWERTOQUES"


export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUISTIONS,
        questions
    }
}
export function addQuestion(question) {
    return{
        type: ADD_QUESTION,
        question,
    }
}
export function addQtoUser(question){
    return{
        type:ADD_QTOUSER,
        question
    }
}
export function addAnswerToQues( authedUser , qid, answer){
    return{
        type: ADD_ANSWERTOQUES,
        authedUser,
        qid,
        answer
    }
}

export function handleAddQuestion( optionOneText, optionTwoText, author ){
    return(dispatch)=>{
       dispatch(showLoading())
     return saveQuestion({ optionOneText, optionTwoText, author })
        .then((question) =>
         {
            dispatch(addQuestion(question))
            dispatch(addQtoUser(question))
           
        }).then(()=> dispatch(hideLoading()))
        
    }
}