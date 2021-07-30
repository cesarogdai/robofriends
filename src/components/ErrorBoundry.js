import React, {Component} from 'react';
/*Error Boundry are very good for users to see the errors
in developer mode wesee detailed errors*/ 

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError :false
        }
    }
    //it's like try and catch block
    componentDidCatch(error, info){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return <h1>Oops that is not good</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundry;