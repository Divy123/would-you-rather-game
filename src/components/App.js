import React from 'react';
import getUsersData,{getQuestionsData} from '../actions/async';
import Login from './Login'
import{connect} from 'react-redux'
 class App extends React.Component{
    componentDidMount(){
        this.props.dispatch(getUsersData());
        this.props.dispatch(getQuestionsData());
    }
     render(){
        
         return(
             <div>
                <Login />
             </div>
         )
     }
 }
 export default connect()(App);