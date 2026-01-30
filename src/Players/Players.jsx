import React, { use } from 'react';
import Player from '../Components/Player/Player';


const Players = ({playersPromiseData,setAvailableBalance,availableBalance,purchasedPlayers,setpurchasedPlayers}) => {

    const cricketPlayers = use(playersPromiseData);
    // console.log(cricketPlayers)
    return (
        <div className='grid grid-cols-3'>
            {
                cricketPlayers.map(player => <Player key={player.id} player={player} 
                    purchasedPlayers={purchasedPlayers}
                    setpurchasedPlayers={setpurchasedPlayers}
                    setAvailableBalance={setAvailableBalance}
                    availableBalance={availableBalance} ></Player>  )
            }
        </div>
    );
};

export default Players;