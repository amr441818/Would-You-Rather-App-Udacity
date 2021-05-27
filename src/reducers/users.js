import {RECEIVE_USERS,ADD_ANSWERTOUSER} from '../actions/users'
import { ADD_QTOUSER} from '../actions/questions'
 
export default function users(state={} , action){
    switch (action.type) {
        case RECEIVE_USERS :
            return{
                ...state,
                ...action.users
            }
            case ADD_QTOUSER:
                const {question} = action
                return {
                    ...state,
                    [question.author]: state[question.author],
                    [question.author]: {
                      ...state[question.author],
                      questions: state[question.author].questions.concat([question.id])
                    }
                  }
                 case ADD_ANSWERTOUSER:
                     const{authedUser, qid, answer} = action;
                     return{
                         ...state,
                         [authedUser] : {
                             ...state[authedUser],
                             answers : {
                                 ...state[authedUser].answers,
                                 [qid]: answer
                             }
                         }
                     }
            default : return state
    }

}