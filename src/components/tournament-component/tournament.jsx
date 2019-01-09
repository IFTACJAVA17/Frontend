import React from 'react';
import './tournament.scss';
import { Collapse, Table, Button } from 'reactstrap';

class Tournament extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false,
      tournament: props.tournament
    };
    
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render(props) {
    return (
      <div className='tournament-card'>
        <div onClick={this.toggle}>
          <span className='a'>{this.state.tournament.name}</span><span className='status-yellow b'>{this.state.tournament.status}</span>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <div>
            <Table borderless>
              <tbody>
                <tr>
                  <th scope="row">Game</th>
                  <td>{this.state.tournament.game}</td>
                </tr>
                <tr>
                  <th scope="row">Type</th>
                  <td>{this.state.tournament.type}</td>
                </tr>
                <tr>
                  <th scope="row">Time Left</th>
                  <td>{this.state.tournament.timeLeft}</td>
                </tr>
                <tr>
                  <th scope="row">Players</th>
                  <td>{this.state.tournament.players}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <Button color='primary' size='sm'>Go to Tournament</Button>
          </div>
        </Collapse>
      </div>
    );
  }
}

let tournament;

const tournament1 = { name: 'Tournament 1', timeLeft: '50 minutes', status: 'Started', players: '6', game: 'Quake 3', type: 'Survival' };
const tournament2 = { name: 'tournament 2', timeLeft: '1 hour', status: 'About to Start', players: '8' };


export default Tournament;