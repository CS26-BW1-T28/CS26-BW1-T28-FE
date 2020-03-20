import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

function getTileImg(type){
    switch(type){
        case 1:
            return 'path'
        case 4:
            return 'metal'
        case 5:
            return 'crystal'
        case 0:
            return 'lava'
    }
}

function MapTile(props){
    return <div 
        className={`tile ${getTileImg(props.value)}`}
        style={{
            height: '80px',
            width: '80px',
        }}>{props.value}</div>
}


function MapRow(props){
    return <div className='map_row'>
                { props.tiles.map(tile=> <MapTile value={tile}/>) }
            </div>
}

function GameMap({marsChambers, gameInfo}){
    const player_size = 80;
    const map_width = 800;
    const map_height = 480;

    const validChambers=[]
    const adjacentChambers = marsChambers.filter(room=> validChambers.includes(room.id))
    const tiles = [
        [1, 0, 0, 0, 0, 0, 0, 0, ],
        [1, 1, 0, 0, 0, 0, 0, 0, ],
        [0, 1, 1, 1, 0, 0, 0, 0, ],
        [0, 0, 0, 1, 0, 0, 0, 0, ],
        [0, 0, 0, 1, 1, 1, 1, 1, ],
        [0, 0, 1, 0, 0, 0, 1, 0, ],
        [0, 0, 1, 0, 0, 0, 1, 0, ],
        [0, 0, 0, 1, 0, 0, 0, 1, ],
        [0, 0, 0, 1, 1, 1, 1, 1, ],
        [0, 0, 0, 0, 0, 1, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 1, ],
    ] // 10x6

    marsChambers.forEach(room=> {
        const directions=['n_to', 's_to', 'e_to', 'w_to']
        directions.forEach(dir=> {
            if (room[dir]){
                validChambers.push(room[dir])
            }
        })
    })   

    // const graph = {
    //     chambers: [
    //         ...marsChambers.map(chamber=> {
    //             return {
    //                 ...chamber,
    //                 x: chamber.x * 10,
    //                 y: chamber.y * -10,
    //                 color: chamber.id === gameInfo.chamber_id ? 'brown' : 'black',
    //                 strokeColor: chamber.id === gameInfo.chamber_id ? 'pink' : 'none',
    //                 size: chamber.id === gameInfo.cahmber_id ? 200 : 'same'
    //             };
    //         }),
    //         ...adjacentChambers.map(chamber=> {
    //             return{
    //                 ...chamber,
    //                 x: chamber.x * 10,
    //                 y: chamber.y * -10,
    //                 color: chamber.id === gameInfo.chamber_id ? 'brown' : 'black',
    //                 strokeColor: chamber.id === gameInfo.chamber_id ? 'purple' : 'none',
    //                 size: chamber.id === gameInfo.cahmber_id ? 200 : 100
    //             };
    //         })
    //     ],
        // links: [...southLinks, ...eastLinks]
    // }

    return(
        <div className='map_display'>
            {/* <Grid fluid>
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
            </Grid> */}

            {
                tiles.map(row=> <MapRow tiles={row}/>)
            }

        </div>
    )
}

export default GameMap;