import React from 'react';

const StartScreen = (props) => {

  const handleNew = () => {
    props.switchScreen('NewGame')
  }

  const handleJoin = () => {
    props.switchScreen('JoinGame')
  }

  return(
    <div>
      <h1>Welcome To Avalon</h1>
      <hr/>
      <button onClick={handleNew}>New Game</button>
      <button onClick={handleJoin}>Join Game</button>
    </div>
  )
}

export default StartScreen;
