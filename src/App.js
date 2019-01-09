import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import TournamentList from './components/tournament-list-component/tournament-list';

class App extends Component {
  render() {
    return (
      <div>
        <TournamentList tournaments={tournaments}/>
      </div>
    );
  }
}

const tournaments = [
  { name: 'Tournament 1', timeLeft: '50 minutes', status: 'Started', players: '16', totalPlayers: '16', game: 'Quake Champions', gameType: 'Deathmatch' },
  { name: 'Tournament 2', timeLeft: '50 minutes', status: 'Waiting for players', players: '3', totalPlayers: '4', game: 'Super Smash Bro', gameType: 'Survival' },
  { name: 'Tournament 3', timeLeft: '50 minutes', status: 'About to start', players: '10', totalPlayers: '12', game: 'Mario Kart', gameType: 'Race' },
  { name: 'Tournament 4', timeLeft: '50 minutes', status: '1 hour', players: '1', totalPlayers: '15', game: 'Ridge Racer', gameType: 'Survival' },
  { name: 'Tournament 5', timeLeft: '50 minutes', status: '2 hour', players: '0', totalPlayers: '10', game: 'Tekken', gameType: 'Survival' },
]

export default App;
