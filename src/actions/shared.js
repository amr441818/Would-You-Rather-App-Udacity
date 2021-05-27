import {getInitialData,saveQuestionAnswer} from '../utils/api'
import {receiveQuestions,addAnswerToQues} from './questions'
import {receiveUsers,addAnswerToUser} from './users'
import {setAuthedUser} from './authedUser'
import{showLoading, hideLoading} from 'react-redux-loading'

export function handleReceiveData(){
    return(dispatch)=>{ 
        dispatch(showLoading())
      return  getInitialData()
        .then(({users, questions}) =>{
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(null))
            dispatch(hideLoading())
        })
    }
}

export function handleLogin(id){
    return(dispatch) =>{
        dispatch(setAuthedUser(id))
    }
}

export function handleAddAnswer( authedUser, qid, answer){
 return(dispatch)=>{
 
     dispatch(addAnswerToQues(authedUser,qid, answer))
     dispatch(addAnswerToUser(authedUser, qid, answer))
      return saveQuestionAnswer({authedUser,qid,answer})

 }

 
}