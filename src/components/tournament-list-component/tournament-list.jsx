import React from 'react';
import Tournament from '../tournament-component/tournament';
import './tournament-list.scss'

function TournamentList(props) {
    console.log(props)
    const tournaments = props.value.map((d) => <Tournament tournament={d}/>)

    return (
        <div className='tournament-component'>
            {tournaments}
        </div>
    )

    // for (var i = 0; i < props.value.length; i++) {
        //     return <Tournament value={props.value[i]}/>
        // }
}

let tournaments;

// class TournamentList extends React.Component {
//     constructor(props) {
//         super(props);
//         tournaments = props.value;
//     }

//     render() {
//         return (
//             <ul className='tournament-component'>
//                 {tournaments.map( d => <li><Tournament value={d}/></li>)}
//             </ul>
//         );
//     }
// }

export default TournamentList;