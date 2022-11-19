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


  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <h4>{this.state.name}</h4>
        <div>{this.state.price}</div>
        
        <button onClick={() => this.setState({name: "Shirt", price: 10})}>Change</button>

        <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
        <input type="text" value={this.state.price} onChange={(e) => this.setState({price: e.target.value})}/>
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
