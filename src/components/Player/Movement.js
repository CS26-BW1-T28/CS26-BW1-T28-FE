import React from 'react'

const moveInput = ({move, setDirection, direction}) => {
    const player_size = 80;
    const map_width = 800;
    const map_height = 480;

    const handleChange = e => {
        setDirection(e.target.value)
    };

    function getNewPosition(direction){
        // const oldPos = state.player.position
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

    function directionMove(direction){
        let movePlayer = {
            type: 'move',
            top: getNewPosition(direction),
            left: getNewPosition(direction),
        }
    }

    function handleKeyDown(e){
        e.preventDefault()

        switch(e.keyCode){
            case 37:
                return directionMove('West')

            case 38:
                return directionMove('North')

            case 39:
                return directionMove('East')

            case 40:
                return directionMove('South')

            default:
                console.log(e.keyCode)
        }
    }

    function mapBounders(oldPos, newPos){
        return (newPos[0] >= 0 && newPos[0] <= map_width - player_size) &&
            (newPos[1] >= 0 && newPos[1] <= map_height)
            ? newPos : oldPos
    }

    function observeNotAPath(oldPos, newPos){
        return 
    }

    window.addEventListener('keydown', e => { handleKeyDown(e) })

    return(
        <div>
            <form onSubmot={e=> move(e, direction)}>
                <input
                onChange={handleChange}
                value={direction}
                />
            </form>
        </div>

    )

}

export default moveInput;