import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';

import StartScreen from './StartScreen.js'
import NewGame from './NewGame.js'
import JoinGame from './JoinGame.js'
import Lobby from './Lobby.js'

const API = "http://localhost:3000/api/v1/"

class App extends Component {
  state = {
    currentScreen: 'StartScreen',
    user: null
  }

  renderScreen = () => {
    switch(this.state.currentScreen) {
      case 'StartScreen':
        return <StartScreen switchScreen={this.switchScreen}/>
      case 'NewGame':
        return <NewGame
                  switchScreen={this.switchScreen}
                  createRoomAndUser={this.createRoomAndUser}
                />
      case 'JoinGame':
        return <JoinGame switchScreen={this.switchScreen}/>
    }
  }

  switchScreen = (newScreen) => {
    this.setState({currentScreen: newScreen})
  }

  createUser = (newName, roomCode) => {
    fetch(API + 'users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newName,
        room_code: roomCode
      })
    })
    .then(r=>r.json())
    .then(user => this.setState({user}))
  }

  createRoom = () => {
    fetch(API + 'rooms', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r=>r.json())
    .then(thing => {
      this.setState({myRoomCode: thing.code})
    })
  }

  createRoomAndUser = (newName) => {
    fetch(API + 'rooms', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r=>r.json())
    .then(thing => {
      console.dir(thing)
      console.log(newName)
      this.createUser(newName, thing.code)
    })
  }

  renderRedirect = () => {
    if (!!this.state.user) {
      return <Redirect to={`/${this.state.user.room_code}`} />
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" render={() => this.renderScreen()} />
            <Route path="/:code" render={(props) => <Lobby {...props} user={this.state.user}/> } />
            {this.renderRedirect()}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
