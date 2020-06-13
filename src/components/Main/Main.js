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
          chamber: `${res.data.title}`,
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

  const handleMove = (e, direction)=> {
    e.preventDefault()

    // if(e.keyCode === 37){
    //   setDirection('w')
    // } else if (e.keyCode === 38){
    //   setDirection('n')
    // } else if (e.keyCode === 39){
    //   setDirection('e')
    // } else if (e.keyCode === 40){
    //   setDirection('s')
    // }

    const dirs = { direction: `${direction}`}
    
    axiosWithAuth()
    .post('api/adv/move', dirs)
    .then(res=> {
      setGameInfo(res.data)
      setDirection('')
      console.log('directions sent')
    })
    .catch(err=> console.log('Error with Move Post', err))
  }


  //window.addEventListener('keydown', e => { handleMove(e) })

  useEffect(()=> {
    initiateGame()
  }, [])

  return (
    <div className='main'>
      <h1>Mars Explorer</h1>
      <div className='instructions-box'>
        <img src={astronaut} alt='astronaut cartoon'/>
        {loading === false && (
          <div>
            <p>Welcome {gameinfo.name}! Use the arrow keys to move your player through the map.</p> 
          </div>
        )}
      </div>

      {loading === true && ( <h3>Loading...</h3> )}

      {loadErr === true && ( <h3>Error Loading Game</h3> )}

      {loading=== false && ( 
        <Gameboard 
          gameinfo={gameinfo} 
          marsChambers={marsChambers} 
          direction={direction} 
          setDirection={setDirection}
        /> 
      )}

    </div>
  );
}

export default Main;
