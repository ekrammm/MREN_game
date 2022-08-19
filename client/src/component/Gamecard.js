import React from "react";
import { useDispatch } from "react-redux";
import { deletegames } from "../redux/gameslice/GameSlice";
import GameUpdate from "./GameUpdate";

function Gamecard({el,ping,setPing}) {
  const dispatch=useDispatch();

  return (
    <div className="card">
      <img src={el.image} />
      <div className="card-contetnt">
        <h1>{el.name}</h1>
        <p>{el.category}</p>
        <p>{el.rate}</p>
        <button onClick={()=>{
          dispatch(deletegames(el._id));
          setPing(!ping);
        }}>delete</button>
        <GameUpdate id={el._id} ping={ping} setPing={setPing}/>
      </div>
    </div>
  );
}

export default Gamecard;
