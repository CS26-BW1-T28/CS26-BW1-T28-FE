import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

function GameMap({marsChambers, gameInfo}){

    const validChambers=[]
    const adjacentChambers = marsChambers.filter(room=> validChambers.includes(room.id))
    const tiles = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    ] // 10x40

    marsChambers.forEach(room=> {
        const directions=['n_to', 's_to', 'e_to', 'w_to']
        directions.forEach(dir=> {
            if (room[dir]){
                validChambers.push(room[dir])
            }
        })
    })   

    return(
        <div className='map_display'>
            <Grid fluid>
                <Row >
                    <Col xs></Col>
                    <Col xs></Col>
                    <Col xs></Col>
                </Row>
                <Row>
                    <Col xs></Col>
                    <Col xs className='isRoom'></Col>
                    <Col xs></Col>
                </Row>
                <Row>
                    <Col xs></Col>
                    <Col xs className='isRoom'></Col>
                    <Col xs></Col>
                </Row>
            </Grid>
        </div>
    )
}

export default GameMap;