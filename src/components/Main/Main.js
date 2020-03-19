import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import "./main.css";
import Gameboard from '../Gameboard/Gameboard'


function Main() {
  // const [marsChambers, setMarsChambers] = useState(null);
  // const [gameinfo, setGameInfo] = useState(null)
  // const [direction, setDirection] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    axiosWithAuth()
      .get("/api/adv/init")
      .then(res => {
        console.log('MAIL CALL', res)
        // setMarsChambers(res.data.mars_map)
        // setGameInfo(res)
        setLoading(false)
      })
      .catch(err => {
        console.log('ERROR PINGING SERVER:', err);
      });
  }, [])

  console.log('localStorage', localStorage)

  return (
    <div className='main'>
      <h1>Mars Explorer</h1>
      <img src='https://i.pinimg.com/originals/fe/2c/64/fe2c646744bf4b17d310aed8240aedb3.png' alt='astronaut cartoon'/>

      {loading === true && (
        <h3>Loading...</h3>
      )}

      {loading=== false && (
        <Gameboard/>
      )}

    </div>
  );
}

export default Main;
