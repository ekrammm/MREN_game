import React from 'react'
import { useSelector } from 'react-redux'
import Gamecard from './Gamecard'

function GameListe({ping,setPing}) {
  const games=useSelector((state)=>state.game.games)
  console.log(games)
  return (
    <div className='gamelist'>
       {
        games? games.map((el)=><Gamecard el={el} ping={ping} setPing={setPing}/>):<img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif'></img>
       }
   
    </div>
  )
}

export default GameListe