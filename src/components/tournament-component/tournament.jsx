import React from 'react';
import './tournament.scss';
import { Collapse, Table, Button } from 'reactstrap';

class Tournament extends React.Component {
  constructor(props) {
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
          <span>{this.state.tournament.name}</span><span className='status-green'>{this.state.tournament.status}</span>
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
                  <th scope="row"> Game Type</th>
                  <td>{this.state.tournament.gameType}</td>
                </tr>
                <tr>
                  <th scope="row">Time Left</th>
                  <td>{this.state.tournament.timeLeft}</td>
                </tr>
                <tr>
                  <th scope="row">Players</th>
                  <td>{this.state.tournament.players}/{this.state.tournament.totalPlayers}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <Button color='primary' size='sm'>Go to lobby</Button>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Tournament;