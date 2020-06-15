import React, { useState } from 'react'
import character from '../../images/astronaut-1.png'

/* 
    PLAYER MOVEMENT FLOW:

    1. Set Direction to n, s, e, w on keyup
    2. Calculate next position with getNewPosition(oldPos, direction)
    3. Check if newPos is off map using mapBoundaries()
    4. If newPos is off map, move player with handleNextScreen()
    5. If newPos has no problems, move player with handlleMovePlayer()

*/

function Player(){
    const [playerTop, setPlayerTop] = useState(0)
    const [playerLeft, setPlayerLeft] = useState(0)
    const [direction, setDirection] = useState('')
    const player_size = 80;
    const map_width = 800;
    const map_height = 480;


    const firstMove = e => {
        let direction = getDirection(e) // Calls useState to set arrow key to n,s,e,w
        let oldPos = [playerTop, playerLeft] // Used to check newPos
        let newPos = getNewPosition(oldPos, e) // Used to check map boundaries

        console.log(`Current Pos: ${oldPos}\nTarget Pos: ${newPos}`)
        
        if( mapBounderies(oldPos, newPos) === newPos ){
            console.log('map result', mapBounderies(oldPos, newPos))
            return handleMovePlayer(e) 
        } else {
            console.log('map result',  mapBounderies(oldPos, newPos))
            return handleNextScreen(e) 
        }
    }


    function getDirection(e){ 
        e.preventDefault()
        if(e.keyCode === 37){
            return setDirection('w')
        }
        else if(e.keyCode === 38){
            return setDirection('n')
        }
        else if(e.keyCode === 39){
            return setDirection('e')
        }
        else if(e.keyCode === 40){
            return setDirection('s')
        }
    }
    
    function getNewPosition(oldPos, e){ 
        console.log(oldPos)
        e.preventDefault()
        // [e\w, n\s]
        switch(e.keyCode){
            case 37: //west
                console.log('W', [ oldPos[0]-80, oldPos[1] ])
                return [ oldPos[0]-80, oldPos[1] ]
            case 38: //north
                console.log('N', [ oldPos[0], oldPos[1]-80 ])
                return [ oldPos[0], oldPos[1]-80 ]
            case 39: //east
                console.log('E', [ oldPos[0]+80, oldPos[1] ])
                return [ oldPos[0]+80, oldPos[1] ]
            case 40: //south
                console.log('S', [ oldPos[0], oldPos[1]+80 ])
                return [ oldPos[0], oldPos[1]+80 ]
        }
    }

    // Resets player to start other side when entering next level.
    function mapBounderies(oldPos, newPos){
        if (newPos[0] === -80){ //too far west
            console.log('boo')
            return [map_width, oldPos[1]] 
        }
        else if(newPos[1] === -80){ //too far north
            console.log('boo')
            return [map_height, oldPos[1]] 
        }
        else if (newPos[0] === map_width){ //too far east
            console.log('boo')
            return [0, oldPos[1]]
        }
        else if (newPos[1] === map_height){ //too far south
            console.log('boo')
            return [oldPos[0], 0]
        }
        else {
            console.log('boo')
            return newPos
        } 
    }

    function handleMovePlayer(e){
        e.preventDefault()
        switch(e.keyCode){
            case 37: //west
                return  setPlayerLeft(playerLeft-80)
            case 38: //north
                return  setPlayerTop(playerTop-80)
            case 39: //east
                return  setPlayerLeft(playerLeft+80)
            case 40: //south
                return  setPlayerTop(playerTop+80)
        }
    }

    function handleNextScreen(e){
        e.preventDefault()
        switch(e.keyCode){
            case 37: // too far west
                console.log(`Returning Zone West`)
                return  setPlayerLeft( map_width-player_size )
            case 38: // too far north
                console.log(`Returning Zone North`)
                return  setPlayerTop( map_height-player_size )
            case 39: // too far east
                console.log(`New Zone East`)
                return  setPlayerLeft( 0 )
            case 40: // too far south
                console.log(`New Zone South`)
                return  setPlayerTop( 0 )
        }
        
    }
    

    // It all comes into action here
    window.addEventListener('keyup', (e) => { firstMove(e) }, 200 )


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




// function pathBoundaries(oldPos, newPos, tiles){
    // const tiles = props.map.tiles
    // const y = newPos[1] / 80
    // const x = newPos[0] / 80
    // const nextTile = tiles[y][x]
    // return nextTile === 0
    // return true
// }