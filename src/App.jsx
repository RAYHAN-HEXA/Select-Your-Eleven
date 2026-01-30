
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Players from './Players/Players'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
 import { ToastContainer } from 'react-toastify';

const playersPromise = async() =>{
  const res = await fetch('../public/players.json')
  return res.json();
}
 const playersPromiseData = playersPromise();



function App() {
  const [toggle,setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(600000000000000000)
  const [purchasedPlayers, setpurchasedPlayers] = useState([])
// console.log(purchasedPlayers)
//  console.log(playersPromiseData)
const removePlayer = (p) =>{
  // console.log(p)
const filterData = purchasedPlayers.filter( cricketer => cricketer.id !== p.id
   )
  setpurchasedPlayers(filterData)
  setAvailableBalance(availableBalance+p.price)
}

  return (
    <>
     
     <div className='w-10/12 mx-auto'>
   
     
      <Navbar availableBalance={
        
        availableBalance}  ></Navbar>
        <div className='flex justify-between items-center '>
      <h1 className='font-bold text-2xl'>{toggle === true ?"Available players":`Selected players ${purchasedPlayers.length}/21`} </h1>
      <div>
       <button onClick={()=>setToggle(true)} className={`p-3 border-1 border-gray-400 border-r-0 rounded-l-2xl ${toggle === true?"bg-amber-300" : ""}`}>Available</button >
       <button onClick={() =>setToggle(false)} className= {`p-3 border-1 border-gray-400 rounded-r-2xl ${toggle === false?"bg-amber-300" : ""} `}>Selected<span>({purchasedPlayers.length})</span></button>
      </div>
     </div>
{
  toggle === true?  <Suspense fallback={<h2>.......players are loading</h2>} >
       <Players
     purchasedPlayers={purchasedPlayers}  
     setpurchasedPlayers={setpurchasedPlayers}

       availableBalance={availableBalance}
       setAvailableBalance={setAvailableBalance}  playersPromiseData={playersPromiseData} ></Players>
  </Suspense> : <SelectedPlayers purchasedPlayers={purchasedPlayers}

  removePlayer={removePlayer}
  
  
  ></SelectedPlayers>
}
<ToastContainer/>
 
     </div>
     
    </>
  )
}

export default App
