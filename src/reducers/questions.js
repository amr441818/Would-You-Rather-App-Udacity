
import {RECEIVE_QUISTIONS, ADD_QUESTION, ADD_ANSWERTOQUES} from '../actions/questions'
 
export default function questions(state={} , action){
    switch (action.type) {
        case RECEIVE_QUISTIONS :
            return{
                ...state,
                ...action.questions
            }
           
           case ADD_QUESTION:
               const{question} = action
               return{
                   ...state,
                   [question.id] : question

               } 
               case ADD_ANSWERTOQUES:
                   const{authedUser, qid, answer} = action;
                   return{
                       ...state,
                       [qid] : {
                           ...state[qid],
                           [answer]:{
                               ...state[qid][answer],
                               votes : state[qid][answer].votes.concat([authedUser])

                               }
                           }

                       } 
                   
               default  : return state
    }

}