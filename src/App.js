import React from 'react';
import './App.css';
// import Greet from './components/greet';
// import Welcome from './components/classComponents';
// import {Hello, Hello1} from './components/hello';
// import PropsExample from './components/props';
// import PropsInClass from './components/propsInClass';
import UseState from './components/useState';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome />
      <Hello />
      <Hello1 /> */}
      {/* <PropsExample name="Saikat">
        <p>This is a p tag</p>
      </PropsExample>
      <PropsExample name="Kartick">
        <button>Click here</button>
      </PropsExample>
      <PropsExample name="Sanjoy">
        <b>Hello</b>
      </PropsExample> */}

      {/* <PropsInClass name="Saikat">
        <p>This is a p tag</p>
      </PropsInClass>

      <PropsInClass name="Kartick">
        <button>Click here</button>
      </PropsInClass>
      
      <PropsInClass name="Sanjoy">
        <b>Hello</b>
      </PropsInClass> */}

      <UseState></UseState>



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
