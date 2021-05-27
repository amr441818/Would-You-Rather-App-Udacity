import React ,{Component} from  'react'



class AnswerResult extends Component{
    render(){
        const {name,avatar,optionOne,optionTwo,authedUser }= this.props
      const optinOneVotesLength = optionOne.votes.length,
            optinTwoVotesLength  = optionTwo.votes.length,
            totalVotes = optinOneVotesLength + optinTwoVotesLength,
            optinOneVotesPercentage = totalVotes !== 0 ? optinOneVotesLength / totalVotes *100 : optinOneVotesLength,
            optinTwoVotesPercentage = totalVotes !== 0 ? optinTwoVotesLength / totalVotes *100 : optinTwoVotesLength

          
console.log(optinOneVotesPercentage)



        return(
            <div className="">
            
            <div className='box-selected col-6'>
                
                <div className='col-5 '>
                <h6> {`Ask by : ${name}`}</h6>
                  <img
                   src={avatar}
                   alt={`avatar to ${name}`}
                  />
                </div>
                <div className="col-6 box-info">
                      <h5>Would You Rather</h5>
                      {}
                        <div className={optionOne.votes.includes(authedUser) ? 'option-selected-authed'  : 'option-selected'}>

                                 <p>{optionOne.text}</p>
                             <div className="progress">
                              <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${optinOneVotesPercentage}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                             </div>
                            <p>{`${optinOneVotesLength} of the ${totalVotes}`}</p>
                        </div>
                            <div className={optionTwo.votes.includes(authedUser) ? 'option-selected-authed'  : 'option-selected'}>
                                 <p>{optionTwo.text}</p>
                             <div className="progress">
                              <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${optinTwoVotesPercentage}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                             </div>
                            <p>{`${optinTwoVotesLength} of the ${totalVotes}`}</p>
                        </div>

                      <div>    
                 </div>
                      
                  </div>
               </div>
               </div>
           
        )
    }
}
export default AnswerResult;