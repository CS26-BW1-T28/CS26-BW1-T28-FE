import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import "./main.css";
import Gameboard from '../Gameboard/Gameboard';
import astronaut from '../../images/astronaut-front.png'


function Main() {
  const [marsChambers, setMarsChambers] = useState();
  const [gameinfo, setGameInfo] = useState()
  const [direction, setDirection] = useState('')
  const [commands, setCommands] = useState()
  const [loading, setLoading] = useState(true)
  const [loadErr, setLoadErr] = useState(false)

  useEffect(()=> {
    axiosWithAuth()
      .get("/api/adv/init")
      .then(res => {
        console.log('MAIL CALL', res)
        let moveChamber = {
          type: 'chamber',
          text: `${res.data.description}`
        }
        setMarsChambers(res.data.mars_map)
        setGameInfo(res.data)
        setLoading(false)
        setCommands([moveChamber])

      })
      .catch(err => {
        console.log('ERROR PINGING SERVER:', err);
        setLoadErr(true)
      });
  }, [])

  useEffect((e, cardinal)=> {
    const direction = { direction: `${cardinal}`}
    axiosWithAuth()
    .post('api/adv/move', direction)
    .then(res=> {
      let movePlayer = {
          type: 'move',
          text: `Heading ${
            cardinal === 'n'
              ? 'north'
              : cardinal === 's'
              ? 'south'
              : cardinal === 'w'
              ? 'west'
              : cardinal === 'e'
              ? 'east'
              : '... nowhere'
          }`
      }

      let moveChamber = {
          type: 'chamber',
          text: `${res.data.description}`
      }
      setGameInfo(res.data)
      setCommands([...commands, movePlayer, moveChamber])
      setDirection('')
    })
    .catch(err=> console.log('Error with Move Post', err))
  })

  return (
    <div className='main'>
      <h1>Mars Explorer</h1>
      <div className='instructions-box'>
        <img src={astronaut} alt='astronaut cartoon'/>
        {loading=== false && ( <p>Welcome {gameinfo.name}! Use the arrow keys to move your player through the map.</p> )}
      </div>

      {loading === true && ( <h3>Loading...</h3> )}

      {loadErr === true && ( <h3>Error Loading Game</h3> )}

      {loading=== false && ( <Gameboard gameinfo={gameinfo} marsChambers={marsChambers}/> )}

    </div>
  );
}

export default Main;
