import React, { Component } from 'react';
// import component 
import './App.css';

class Test extends Component {
  // constructor runs when the component is initialized 
  constructor(){
    super(); //This will run the parent's constructor, all functions of parent component are accessible
    //all states are stored in state object

    this.state={color: 'red', flying:'no'}

  }

  changeColor=()=>{
    // this.setState will change the state
    this.setState({color: "blue"});
  }

  // used to pass a parameter and change state, it runs before the page is rendered
  static getDerivedStateFromProps(props, state) {
    return {color: props.favcol };
  }

  render() {
    return (
      <div>
      <div>Hi {this.state.color} {this.state.flying}</div>
      <button onClick={this.changeColor}>Click me</button>
      </div>

      // you need to invoke the functions with this.functionName
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() { //called after component mounted. For any later changes to be done
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}
function App() {
  return (
    <div className="App">
      {/* <Test favcol="green"/> */}
      <Header/>
    </div>
  );
}

export default App;
// A component is updated whenever there is a change in the component's state or props
// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// shouldComponentUpdate is for if the component should change or no in rerender