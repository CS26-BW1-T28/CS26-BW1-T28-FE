import React, { useState } from 'react'
import character from '../../images/astronaut-1.png'

/* 
    GAMEFLOW:

    1. First Move
    2. Get Direction => setDirection to n, s, e, w
    3. Get Next Position => Check direction and set newPos
    4. 

*/

function Player(){
    const [playerTop, setPlayerTop] = useState(0)
    const [playerLeft, setPlayerLeft] = useState(0)
    const [direction, setDirection] = useState('')
    const player_size = 80;
    const map_width = 800;
    const map_height = 480;


    const firstMove = e => {
        let direction = getDirection(e) //change arrow key to n,s,e,w
        let oldPos = [playerTop, playerLeft] //player[y][x]
        let newPos = getNewPosition(oldPos, direction)
        // handleMovePlayer(e)
        // Check map boundary if player can move in direction
        if( mapBounderies(oldPos, newPos) && pathBoundaries(oldPos, newPos) ){
            return handleMovePlayer(e) //sets playerTop, playerBottom +-80
        }
    }
    

    function getDirection(e){ //aka handleKeyDown
        e.preventDefault()
        // switch(e.keyCode){
        if (e.keyCode === 37) {
            setDirection('w')
        }
        if (e.keyCode === 39){
            setDirection('e')
        }
        if (e.keyCode === 38){
            setDirection('n')
        }
        if (e.keyCode === 40){
            setDirection('s')
        }
    
        return getNewPosition(direction)
    }
    

    function getNewPosition(oldPos, direction){ 
        if(direction = 'w'){ 
            return [ oldPos[0] - player_size, oldPos[1] ]
        }
        else if(direction = 'e'){
            return [ oldPos[0] + player_size, oldPos[1] ]
        }
        else if(direction = 'n') {
            return [ oldPos[0], oldPos[1] - player_size ]
        }
        else if(direction = 's') {
            return [ oldPos[0], oldPos[1] + player_size ]
        }
    }

    function handleMovePlayer(e){
        e.preventDefault()
        switch(e.keyCode){
            case 37: //west
                return setPlayerLeft(playerLeft-80)
            case 38: //north
                return setPlayerTop(playerTop-80)
            case 39: //east
                return setPlayerLeft(playerLeft+80)
            case 40: //south
                return setPlayerTop(playerTop+80)
        }
    }

    function mapBounderies(oldPos, newPos){
        return (newPos[0] >= 0 && newPos[0] <= map_width ) &&
            (newPos[1] >= 0 && newPos[1] <= map_height ) 
            ? newPos : oldPos
    }

    function pathBoundaries(oldPos, newPos, tiles){
        // const tiles = props.map.tiles
        // const y = newPos[1] / 80
        // const x = newPos[0] / 80
        // const nextTile = tiles[y][x]
        // return nextTile === 0
        return true
    }

    // It all comes into action here
    window.addEventListener('keydown', e => firstMove(e) )

    return(
        <div
            style={{
                position: 'absolute',
                top: playerTop, 
                left: playerLeft,
                backgroundImage: `url('${character}')`,
                backgroundPosition: '0 0',
                width: '80px',
                height: '80px',
                backgroundSize: 'contain'
            }}
        />
    )
}

export default Player;