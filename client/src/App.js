import logo from './logo.svg';
import './App.css';

import Gamebar from './component/Gamebar';
import { Route, Routes } from 'react-router-dom';
import GameListe from './component/GameListe';
import Home from './component/Home';
import { useEffect, useState } from 'react';
import { getgames } from './redux/gameslice/GameSlice';
import {useDispatch} from "react-redux";
import Gameadd from './component/Gameadd';
function App() {
const dispatch=useDispatch();
const [ping, setPing] = useState(false)
  useEffect(() => {
  dispatch(getgames());
  }, [ping])
  
  return (
    <div className="App">
    <Gamebar/>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Games" element={<GameListe ping={ping} setPing={setPing}/>}/>
<Route path="/Add" element={<Gameadd ping={ping} setPing={setPing}/>}/>

    </Routes>
    </div>
  );
}

export default App;
