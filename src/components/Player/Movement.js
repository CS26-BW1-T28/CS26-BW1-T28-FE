import React from 'react'

const moveInput = ({player, setDirection, direction, move}) => {
    const player_size = 80;
    const map_width = 800;
    const map_height = 480;

    function handleKeyDown(e){
        e.preventDefault()
        // switch(e.keyCode){
        //     case 37:
        //         return directionMove('West')
        //     case 38:
        //         return directionMove('North')
        //     case 39:
        //         return directionMove('East')
        //     case 40:
        //         return directionMove('South')
        //     default:
        //         console.log(e.keyCode)
        // }

        switch(e.keyCode){
          case 37:
            return setDirection('w')
          case 38:
            return setDirection('n')
          case 39:
            return setDirection('e')
          case 40:
            return setDirection('s')
          default:
            console.log(e.keyCode)
        }
        return move(direction)
    }

    function directionMove(direction){
        let movePlayer = {
            type: 'move',
            top: getNewPosition(direction),
            left: getNewPosition(direction),
        }
    }

    function getNewPosition(player, direction){
        const oldTop = player.top
        const oldLeft = player.left

        switch(direction){
            case 'West':
                return [ oldLeft-80, oldTop ]
            case 'East':
                return [ oldLeft+80, oldTop ]
            case 'North':
                return [ oldLeft, oldTop-80 ]
            case 'South':
                return [ oldLeft, oldTop+80 ]
        }
    }


    // function mapBounderies(oldPos, newPos){
    //     return (newPos[0] >= 0 && newPos[0] <= map_width - player_size) &&
    //         (newPos[1] >= 0 && newPos[1] <= map_height)
    //         ? newPos : oldPos
    // }

    // function observeNotAPath(oldPos, newPos){
    //     // const tiles = props.map.tiles
    //     const tiles = []
    //     const y = newPos[1] / 80
    //     const x = newPos[0] / 80
    //     const nextTile = tiles[y][x]
    //     return nextTile === 0
    // }

    // function attemptMove(direction){
    //     const oldPos = player.position
    //     const newPos = getNewPosition(direction)
    //     if(mapBounderies(oldPos, newPos) && observeNotAPath(oldPos, newPos)){
    //         directionMove(newPos)
    //     }
    // }

    window.addEventListener('keydown', e => { handleKeyDown(e) })

    return(
        <div>
            {/* <form onSubmit={e=> move(e, direction)}>
                <input
                    type='hidden'
                    onChange={handleChange}
                    value={direction}
                />
            </form> */}
        </div>
    )

}

export default moveInput;