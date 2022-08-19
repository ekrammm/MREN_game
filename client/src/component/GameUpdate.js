import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updategames } from '../redux/gameslice/GameSlice';

function GameUpdate({id,ping,setPing}) {
  const [game, setGame] = useState({});
  const [show, setShow] = useState(false);
  const dispatch=useDispatch();

  return (
   <div>
    <button onClick={()=>setShow(!show)}>update game</button>
    {
      show?  <div className="updategame">
        <button onClick={()=>setShow(!show)}>X</button>
      <p>Name:</p>
      <input type="text" onChange={(e)=>setGame({...game,name:e.target.value})}></input>
      <p>Category:</p>
      <select onChange={(e)=>setGame({...game,category:e.target.value})}>
        <option  value="Moba">Moba</option>
        <option value="FPS">FPS</option>
        <option value="TPS">TPS</option>
        <option value="RPG">RPG</option>
        <option value="Arcade">Arcade</option>
      </select>
     
      <p>Date:</p>
      <input type="date"onChange={(e)=>setGame({...game,release_date:e.target.value})}></input>
      <p>Image:</p>
      <input type="text" onChange={(e)=>setGame({...game,image:e.target.value})}></input>
      <button onClick={()=>{
        dispatch(updategames({id:id,game}));
        setPing(!ping);
        setShow(!show);
      }}>update game</button>
    </div>:null
    }
   </div>
  )
}

export default GameUpdate