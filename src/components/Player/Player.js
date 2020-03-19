import React, {useState} from 'react'
import character from '../../images/astronaut-1.png'


function Player({props, gameInfo}){
    const [playerInfo, setPlayer] = useState(gameInfo)
    // currentChamber = mars_map.filter(rooms=> room.id === current_chamber.id)
    // position[1] = currentChamber.y
    // position[0] = currentChamber.x

    return(
        <div
            style={{
                position: 'absolute',
                top: 5, //y index
                left: 10, //x index
                backgroundImage: `url('${character}')`,
                backgroundPosition: '0 0',
                width: '80px',
                height: '80px',
                border: '2px solid green',
                backgroundSize: 'contain'
            }}
        />
    )
}

export default Player;