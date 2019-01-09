import React from 'react';
import Tournament from '../tournament-component/tournament';
import './tournament-list.scss'

function TournamentList(props) {
    console.log(props)
    const tournaments = props.tournaments.map((d) => <Tournament tournament={d}/>)

    return (
        <div className='tournament-component'>
            {tournaments}
        </div>
    )
}

export default TournamentList;