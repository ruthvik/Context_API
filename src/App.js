import React from 'react';
import './App.css';


const MyContext = React.createContext()

class MyProvider extends React.Component {
  state = {
    name: 'West',
    age: 100,
    cool: true
  }
  render(){
    return(
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

class Children extends React.Component {
  render(){
    return(
      <div>
          <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Child Age: {context.state.age}</p>
              <p>Child Name: {context.state.name}</p>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class Person extends React.Component {
 
  render() {   
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>ð°ð¥ð</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
    <Children />
  </div>
)



class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
