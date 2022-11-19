import {Component} from 'react';
// React,
class App extends Component {
  constructor(props) {
    super(props);
    this.title = "BuyStuff"
    this.state = {
      name : "Shoe",
      price: 5
    }
  }

  // setCounter(counter)
  // {
  //   console.log(counter)
  //   this.setState({clickCounter : counter,})
  // }

  // setTitle()
  // {
  //   console.log(this.title);
  //   this.title = "New Title";
  //   console.log(this.title);
  // }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <hr/>
          <h2>{this.state.name}</h2>
          <h2>{this.state.price}</h2>
        {/* <h3>Clicks:{this.state.clickCounter}</h3>
        <button onClick={() => this.setCounter(this.state.clickCounter + 1)} >+1</button>
        <button onClick={() => this.setTitle()} >New Title!</button> */}
      </div>
    )
  }
}


export default App;
















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
