import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

function GameMap(props){

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
                    <Col xs className='isRoom'>Test Room</Col>
                    <Col xs></Col>
                </Row>
                <Row>
                    <Col xs></Col>
                    <Col xs className='isRoom'>Test Room</Col>
                    <Col xs></Col>
                </Row>
            </Grid>
        </div>
    )
}

export default GameMap;