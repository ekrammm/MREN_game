import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addgames, getgames } from "../redux/gameslice/GameSlice";
import {useNavigate}from "react-router-dom"
function Gameadd({ping,setPing}) {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [game, setGame] = useState({
    name:"",
    image:"",
    category:"",
    release_date:""
  })
  return (
    <div className="addgame">
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
        dispatch(addgames(game));
        
        setPing(!ping);
        setTimeout(() => {
          navigate("/Games")
        }, 1000);
        
      }}>add new game</button>
    </div>
  );
}

export default Gameadd;
