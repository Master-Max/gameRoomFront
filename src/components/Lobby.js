import React from 'react';
import { ActionCable } from 'react-actioncable-provider';

const API = "http://localhost:3000/api/v1/"

class Lobby extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      user: props.user,
      allUsers: []
    }
    // console.log('Hi, ' + this.state.user.name)
  }

  componentDidMount() {
    fetch(API + 'users')
    .then(r=>r.json())
    .then(users => {
      console.dir(users)
      this.setState({allUsers: users})
    })
  }


  render() {
    let u = window.location.href
    u = u.slice(Math.max(u.length - 4, 1))
    console.log(u)

    return(
      <div className="Lobby">
        <ActionCable channel={{channel: 'RoomsChannel', code: u}} onRecieved={() => {
            console.log('callback is called');
          }}/>
        <h1>Lobby</h1>
      </div>
    )
  }
}
export default Lobby;
