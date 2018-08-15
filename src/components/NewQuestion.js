import React from 'react';
import {connect} from 'react-redux';
import {Router,withRouter} from 'react-router-dom';
import {addQuestion} from '../actions/async'
class NewQuestion extends React.Component{
    state={
        optionOneText:'',
        optionTwoText:''
    }
    handleChange=(val,opt)=>{
        let copy=this.state;
        opt==='a'?(copy.optionOneText=val):(copy.optionTwoText=val)
        this.setState({...copy});
    }
    updateStore=(e)=>{
        e.preventDefault();
        let {loggedUserId,dispatch}=this.props;
        addQuestion({...this.state,author:loggedUserId},dispatch)
        this.props.history.push('/')
    }

    render(){
       return(<div className='fresh'>
      
           <h3>Create New Question</h3>
           <p style={{color:'#0cb1ce',fontWeight:'bold'}}>Would You Rather</p>
           <form>
               <input className='inp' required value={this.state.optionOne} onChange={(e)=>this.handleChange(e.target.value,'a')} /><br/>
               <p>OR</p>
               <input className='inp' required value={this.state.optionTwo} onChange={(e)=>this.handleChange(e.target.value,'b')} /><br/><br/>
               <button onClick={(e)=>this.updateStore(e)} >Submit</button>
           </form>
       </div>)
    }
}
function mapStateToProps({saveLoggedUser}){
    let loggedUserId = saveLoggedUser.loggedUserId;
     return {
         loggedUserId
     }
     
}
export default withRouter(connect(mapStateToProps)(NewQuestion));