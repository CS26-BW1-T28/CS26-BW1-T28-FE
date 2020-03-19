import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import "./main.css";
import Gameboard from '../Gameboard/Gameboard';
import astronaut from '../../images/astronaut-front.png'


function Main() {
  const [marsChambers, setMarsChambers] = useState(null);
  const [gameinfo, setGameInfo] = useState(null)
  const [direction, setDirection] = useState('')
  const [loading, setLoading] = useState(true)
  const [loadErr, setLoadErr] = useState(false)

  useEffect(()=> {
    axiosWithAuth()
      .get("/api/adv/init")
      .then(res => {
        console.log('MAIL CALL', res)
        setMarsChambers(res.data.mars_map)
        setGameInfo(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log('ERROR PINGING SERVER:', err);
        setLoadErr(true)
      });
  }, [])

  console.log('localStorage', localStorage)

  return (
    <div className='main'>
      <h1>Mars Explorer</h1>
      <img src={astronaut} alt='astronaut cartoon'/>

      {loading === true && ( <h3>Loading...</h3> )}

      {loadErr === true && ( <h3>Error Loading Game</h3> )}

      {loading=== false && ( <Gameboard gameinfo={gameinfo} marsChambers={marsChambers}/> )}

    </div>
  );
}

export default Main;
