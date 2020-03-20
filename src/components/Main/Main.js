import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import "./main.css";
import Gameboard from '../Gameboard/Gameboard';
import astronaut from '../../images/astronaut-front.png'


function Main() {
  const [marsChambers, setMarsChambers] = useState();
  const [gameinfo, setGameInfo] = useState()
  const [gameStats, setGameStats] = useState()
  const [direction, setDirection] = useState('')
  const [loading, setLoading] = useState(true)
  const [loadErr, setLoadErr] = useState(false)

  const initiateGame = ()=> {
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
        setGameStats([moveChamber])

      })
      .catch(err => {
        console.log('ERROR PINGING SERVER:', err);
        setLoadErr(true)
      });
  }

  const move = (e, direction) => {
    e.preventDefault()
    const dirs = { dirs: `${direction}`}
    return axiosWithAuth()
    .post('api/adv/move', dirs)
    .then(res=> {
      let movePlayer = {
        type: 'direction',
        text: `Subject is ${
          direction === 'n'
          ? 'heading north'
          : direction === 's'
          ? 'heading south'
          : direction === 'w'
          ? 'heading west'
          : direction === 'e'
          ? 'heading east'
          : 'stationary.'
        }.`
      }
      let moveChamber = {
        type: 'chamber',
        text: `${res.data.description}`
      }
      setGameInfo(res.data)
      setDirection('')
    })
    .catch(err=> console.log('Error with Move Post', err))
  }

  const handleMove = (e)=> {
    e.preventDefault()
    switch(e.keyCode){
      case 37:
        setDirection('w')
      case 38:
        setDirection('n')
      case 39:
        setDirection('e')
      case 40:
        setDirection('s')
      default:
        console.log(e.keyCode)
    }
    console.log(direction)
    move(e, direction)
  }

  window.addEventListener('keydown', e => { handleMove(e) })

  useEffect(()=> {
    initiateGame()
  }, [])

  return (
    <div className='main'>
      <h1>Mars Explorer</h1>
      <div className='instructions-box'>
        <img src={astronaut} alt='astronaut cartoon'/>
        {loading=== false && (
          <div>
            <p>Welcome {gameinfo.name}! Use the arrow keys to move your player through the map.</p> 
            {/* <p>{gameStats.text}</p> */}
          </div>
        )}
      </div>

      {loading === true && ( <h3>Loading...</h3> )}

      {loadErr === true && ( <h3>Error Loading Game</h3> )}

      {loading=== false && ( <Gameboard gameinfo={gameinfo} marsChambers={marsChambers}/> )}

    </div>
  );
}

export default Main;
