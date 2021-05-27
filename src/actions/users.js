export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWERTOUSER = 'ADD_ANSWERTOUSER'

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users
    }
}
 
export function addAnswerToUser(authedUser , qid, answer){
    return{
        type: ADD_ANSWERTOUSER,
        authedUser,
        qid,
        answer
    }
}