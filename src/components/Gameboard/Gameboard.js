import React from 'react'
import GameMap from './GameMap'
import Player from '../Player/Player'
import './gameboard.css'


function Gameboard({marsChambers, gameInfo}){

    return(
        <div className='gameBoard'>
            <GameMap marsChambers={marsChambers} gameInfo={gameInfo}/>
            <Player gameInfo={gameInfo}/>
        </div>
    )
}

export default Gameboard;