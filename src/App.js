import React from 'react';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/classComponents';
import {Hello, Hello1} from './components/hello';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Hello1 />
    </div>
    /* 
      **so basically react have two type of component
        *1. Stateless Functional component
          // JavaScript Functions
            // Like...
            function welcome(props){
              return <h1> Hello, {props.name} </h1>;
            } 
        *2. statefull Class component 
          // Class extending component class render method returning html
            // Like....
            class welcome extends React.Component {
              return(){
                return <h1> Hello, {this.props.name} </h1>;
              }
            }
      **
    */
  );
}

export default App;
