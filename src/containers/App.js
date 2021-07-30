import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll  from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
//PROPS are inputs and we never modify them
//State is the descriptionof your app
//An object that describes your application
//We're able to change the input

//Anytime you make your own methods on
//a components use this syntax
//method = (event) =>{} 




/*Life cycle hooks because they get run everytime a component gets called*/ 

class App extends Component {
    constructor(){
        super()
        this.state  = {
            robots: [],
            searchfield: ''
        }
        
        
    }
    //Because it's part of react no arrow functions
    //run the constructor with an empty array
    componentDidMount(){
        //fetch is part of the window object
        fetch('https://jsonplaceholder.typicode.com/users')
            //one line for clean code
        .then(response =>response.json())
        //Empty string
        // .then(users => {});
        .then(users => this.setState({robots:users}));
        
        
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const {robots, searchfield} = this.state;
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })  
  //render runs twice because we updated the state
  //it goes from an empty array to fill with users
  
  //Condition to for progress bar
//  false condition, if it turns true then it does
//  e.g false(0) == true
    return !robots.length ?
    <h1>Loading</h1>:
        (

            <div className='tc'>
            
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundry>           
                <CardList robots={filterRobots}/>
                </ErrorBoundry>
             </Scroll>
            </div>
        );
        }
  
       
    }
export default App;