import React from 'react'
import axios from 'axios'

/* MOVE IS YOUR POST REQUEST  */

export default class Move extends React.Component{
  
  state = {
    name: '',
    title: '',
    description: '',
    players: [],
    error_msg: ''

  }

  handleChange = event => {
    this.setState({}) 
  }

  handleSubmit = event => {
    event.preventDefault();

      const move = {

      };

    }

  // function postDirection(move){
  //   axios.post(`https://cs1build.herokuapp.com/api/adv/move/`, move)
  //     .then(data => console.log(data))
  //     .catch()
  // }

  render() {
    return(
      <div>

      </div>
    )
  }


}