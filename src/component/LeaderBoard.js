import React ,{Component} from 'react'
import { connect } from 'react-redux';
class Leaderboard extends Component{
    render(){
        
        const UserInfo = this.props.usersVal.map((u) =>{
            const name = u.name
            const id = u.id
            const avatar = u.avatarURL
             const answersQ= Object.keys(u.answers).length
             const userQuestion = u.questions.length
             const score= parseInt(Object.keys(u.answers).length + u.questions.length )
             return{name,avatar,answersQ,userQuestion,score}
            
        }).sort((a,b) => b.score -a.score)
   
        return(
            <div>
                
                 <h3 className="center">Leaderboard</h3>
                {UserInfo.map(i =>(
                  
                    <div className=""key={i.name} >
                   
                       <div className='box col-6'>
                           
                       
                         <div className='col-5 '>
                         <h6> {i.name}</h6>
                           <img
                            src={i.avatar}
                            alt={`avatar to ${i.name}`}
                           />
                         </div>
                         <div className="col-4 box-info">
                             <p>{`Answer question is : ${i.answersQ} `}</p>
                             <p>{`creact question is : ${i.userQuestion}`}</p>
                         </div>
                         <div className="col-3"> 
                         <p className ="score">{`score is: ${i.score}`}</p>    
                         </div>
       
                       </div>
                    </div>
                    
                ))}

              
            </div>
          
        )
    }
}
function mapStateToProps({users}){
return{
    usersVal: Object.values(users),
    
}

}
export default  connect(mapStateToProps) (Leaderboard);