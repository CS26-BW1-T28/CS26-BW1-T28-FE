import React, {useState} from 'react'
import character from '../../images/astronaut-1.png'


function Player(){
    const [playerTop, setPlayerTop] = useState(0)
    const [playerLeft, setPlayerLeft] = useState(0)

    function handleKeyDown(e){
        switch(e.keyCode){
            case 37: //west
                console.log('w')
                return setPlayerLeft(playerLeft-80)
            case 39: //east
                console.log('e')
                return setPlayerLeft(playerLeft+80)
            case 38: //north
                console.log('n')
                return setPlayerTop(playerTop-80)
            case 40: //south
                console.log('s')
                return setPlayerTop(playerTop+80)
        }
    }

    window.addEventListener('keydown', e => { handleKeyDown(e) })

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