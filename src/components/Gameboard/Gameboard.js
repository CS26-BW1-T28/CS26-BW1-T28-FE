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



// const handleMove = (player) => {
//     function getNewPosition(direction){
//         const oldTop = player.top
//         const oldLeft = player.left
//         switch(direction){
//             case 'West':
//                 return [ oldLeft-80, oldTop ]
//             case 'East':
//                 return [ oldLeft+80, oldTop ]                
//             case 'North':
//                 return [ oldLeft, oldTop-80 ]                
//             case 'South':
//                 return [ oldLeft, oldTop+80 ]
//         }
//     }
// function directionMove(direction){
//     let movePlayer = {
//         type: 'move',
//         top: getNewPosition(direction),
//         left: getNewPosition(direction),
//     }
// }
// }
