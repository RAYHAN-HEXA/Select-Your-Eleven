
import SelectedPlayerCard from '../SelectedPlayerCard/selectedPlayerCard';

const SelectedPlayers = ({purchasedPlayers,removePlayer}) => {
   
   
   
    return (
       <div>
      {
          purchasedPlayers.map(player=><SelectedPlayerCard player={player} removePlayer={removePlayer} ></SelectedPlayerCard>)
      }
       </div>
    );
};

export default SelectedPlayers;