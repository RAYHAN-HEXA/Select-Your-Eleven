import React, { use } from 'react';
import Player from '../Components/Player/Player';


const Players = ({playersPromiseData,setAvailableBalance}) => {

    const cricketPlayers = use(playersPromiseData);
    // console.log(cricketPlayers)
    return (
        <div className='grid grid-cols-3'>
            {
                cricketPlayers.map(player => <Player key={player.id} player={player} setAvailableBalance={setAvailableBalance} ></Player>  )
            }
        </div>
    );
};

export default Players;