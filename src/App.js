import {Component} from 'react';
import Header from './Header/header';
import InventoryItem from './InventoryItem/InventoryItem';
// React,
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socks: <InventoryItem name="socks" price="5" />,
      shoes: <InventoryItem name="shoes" price="10" />
  };
  }


  render() {
    return (
      <div>
        <Header title="buystuff" />
        <h2>{this.state.item}</h2>
        <hr />
        {this.state.socks}
        {this.state.shoes}
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
