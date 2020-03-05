import React from 'react' 
import axios from 'axios'

/* INITIALIZE THIS IS YOUR GET REQUEST */

export default class Init extends React.Component {
  
  state = {

  }

  componentDidMount() {
    axios.get(`https://cs1build.herokuapp.com/api/adv/init/`)
      .then()
      .catch()
  }

  render() {
    return(
      <div>
        
      </div>
    )
  }


}