import React, {useState} from 'react'
import character from '../../images/astronaut-1.png'


function Player({gameInfo}){
    const [playerTop, setPlayerTop] = useState()
    const [playerLeft, setPlayerLeft] = useState()

    return(
        <div
            style={{
                position: 'absolute',
                top: 0, 
                left: 0,
                // top: playerTop, 
                // left: playerLeft,
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