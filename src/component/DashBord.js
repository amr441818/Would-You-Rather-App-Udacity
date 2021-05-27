import React, {Component} from 'react'
import { connect } from 'react-redux';
import EvryQuestion from './EvryQuestion'

class Dashboad extends Component{
    state = {
        tab: true
    }
    render(){
        console.log(this.props.questionsIdForUnAnswers)
        return(
            <div>
                <h3 className="center">Dashboard</h3>
                <div className='tabs'>
                    <button
                    className="btn btn-danger"
                    onClick={()=> this.setState({tab:true})}
                    >

                        UnAnswerdQestion
                    </button>
                    <button
                    className="btn btn-primary"
                    onClick={()=> this.setState({tab:false})}
                    >
                        

                        AnswerdQestion
                    </button>
                    </div>
                    {this.state.tab === true? this.props.questionsIdForUnAnswers.map((qid) => (
                        <div key={qid}>
                            
                             <EvryQuestion id={qid} 
                             /></div>
                    )) :
                    
                    this.props.questionsIdForAnswers.map((qid) => (
                        <div key={qid}>
                             <EvryQuestion id={qid} 
                             /></div>
                    )) 
                    
                    }

                </div>
             
        )
    }
}

export default connect(state=>{
    const ansQuestions = Object.keys(state.users[state.authedUser].answers)
    return{
        
            questionsIdForAnswers: ansQuestions ? Object.keys(state.questions).filter(q =>ansQuestions.includes(q))
            .sort((a,b)=>state.questions[a].timestamp  - state.questions[b].timestamp).reverse() : null
           ,
            questionsIdForUnAnswers: ansQuestions ? Object.keys(state.questions).filter(q =>!ansQuestions.includes(q))
            .sort((a,b)=>state.questions[a].timestamp  - state.questions[b].timestamp).reverse() : null
    }
    }

)(Dashboad);