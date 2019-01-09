import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import FriendList from './components/friendlist-component/FriendList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <FriendList />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
      </div>
    );
  }
}

export default App;
