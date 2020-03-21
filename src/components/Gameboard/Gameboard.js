import React from 'react'
import GameMap from './GameMap'
import Player from '../Player/Player'
import './gameboard.css'
import moveInput from '../Player/Movement'



function Gameboard({marsChambers, gameInfo, direction, setDirection, move}){   
    return(
        <div className='gameBoard'>
            <GameMap marsChambers={marsChambers} gameInfo={gameInfo}/>
            <Player gameInfo={gameInfo}/>
            <moveInput move={move} direction={direction} setDirection={setDirection}/>
        </div>
    )
}

export default Gameboard;
