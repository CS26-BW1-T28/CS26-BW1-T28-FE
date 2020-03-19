import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import "./main.css";


function Main() {
  // const [marsChambers, setMarsChambers] = useState(null);
  // const [gameinfo, setGameInfo] = useState(null)
  // const [direction, setDirection] = useState('')

  useEffect(()=> {
    axiosWithAuth()
      .get("/api/adv/init")
      .then(res => {
        console.log('MAIL CALL', res)
        // setMarsChambers(res.data.mars_map)
        // setGameInfo(res)
      })
      .catch(err => {
        console.log('ERROR PINGING SERVER:', err);
      });
  }, [])

  console.log('localStorage', localStorage)

  return (
    <div className='main'>
      <h1>Welcome to Mars Underground</h1>
      <img src='https://i.pinimg.com/originals/fe/2c/64/fe2c646744bf4b17d310aed8240aedb3.png'/>

      <div className='map_display'>
        <p>Test Room</p>
        <p className='not_room'></p>
        <p className='not_room'></p>
        <p>Test Room</p>
      </div>

    </div>
  );
}

export default Main;
