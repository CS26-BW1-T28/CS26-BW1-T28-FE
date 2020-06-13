import React, {useState} from 'react'
import character from '../../images/astronaut-1.png'

function Player(){
    const [playerTop, setPlayerTop] = useState(0)
    const [playerLeft, setPlayerLeft] = useState(0)
    const [direction, setDirection] = useState('')
    const player_size = 80;
    const map_width = 800;
    const map_height = 480;


    function firstMove(e){
        let direction = getDirection(e)
        let oldPos = [playerTop, playerLeft] //player[y][x]
        let newPos = getNewPosition(direction)
        if(mapBounderies(oldPos, newPos) && pathBoundaries(oldPos, newPos)){
            return newPos
        }
    }

    function getDirection(e){ //aka handleKeyDown
        e.preventDefault()
        // switch(e.keyCode){
        if (e.keyCode === 37) {
            console.log('w')
            setDirection('w')
        }
        if (e.keyCode === 39){
            console.log('e')
            setDirection('e')
        }
        if (e.keyCode === 38){
            console.log('n')
            setDirection('n')
        }
        if (e.keyCode === 40){
            console.log('s')
            setDirection('s')
        }
    
        return getNewPosition(direction)
    }

    function getNewPosition(direction){ 
       switch(direction){
            case 'w': 
                return setPlayerLeft(playerLeft-80)
            case 'e': 
                return setPlayerLeft(playerLeft+80)
            case 'n': 
                return setPlayerTop(playerTop-80)
            case 's': 
                return setPlayerTop(playerTop+80)
        }
    }

    function mapBounderies(oldPos, newPos){
        return (newPos[0] >= 0 && newPos[0] <= map_width - player_size) &&
            (newPos[1] >= 0 && newPos[1] <= map_height)
            ? newPos : oldPos
    }

    function pathBoundaries(oldPos, newPos, tiles){
        // const tiles = props.map.tiles
        const y = newPos[1] / 80
        const x = newPos[0] / 80
        const nextTile = tiles[y][x]
        return nextTile === 0
    }

    function handleKeyDown(e){
        switch(e.keyCode){
            case 37: //west
                console.log('w')
                return setPlayerLeft(playerLeft-80)
            case 38: //north
                console.log('n')
                return setPlayerTop(playerTop-80)
            case 39: //east
                console.log('e')
                return setPlayerLeft(playerLeft+80)
            case 40: //south
                console.log('s')
                return setPlayerTop(playerTop+80)
        }
    }

    window.addEventListener('keydown', e => { firstMove(e) })

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