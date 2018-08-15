import React from 'react';
import {connect} from 'react-redux';
class Leaderboard extends React.Component{
    render(){
        let {users}=this.props;
        let sortedUsers=(users!==undefined)?Object.values(users).sort((a,b)=>{
            let val=(b.questions.length+Object.keys(b.answers).length)
            -(a.questions.length+Object.keys(a.answers).length);
            return val;
        }):null
       console.log(sortedUsers);
        return(
            <div ><h2>Leaderboard</h2>
              {
                  users&&sortedUsers.map((ind)=>(
                     <div className='score-dash' key={ind.id}>
                         <div style={{width:'12vw'}}>
                         <img src={ind.avatarURL} className='user'/>
                          
                         </div>
                          <div >
                          <p className='ind-name'>{ind.name}</p>
                              <p className='num'>Questions asked:{ind.questions.length}</p>
                              <p className='num'>Questions answered:{Object.keys(ind.answers).length}</p>
                              <p className='final'>Score:{Object.keys(ind.answers).length+ind.questions.length}</p>
                          </div>
                     </div>
                  ))
              }  
        
            </div>
        )
    }
}
function mapStateToProps({getUsers}){
    let users=getUsers.users;
    
    return{
        users
    }
}
export default connect(mapStateToProps)(Leaderboard);