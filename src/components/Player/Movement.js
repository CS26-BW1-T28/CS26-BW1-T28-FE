import React from 'react'

const moveInput = ({move, setDirection, direction}) => {
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