import React from 'react';

const JoinGame = (props) => {

  const handleJoin = () => {
    const code = document.getElementById('join-code').value
    const name = document.getElementById('join-name').value
    // console.log(`Name: ${name}\nCode: ${code}`)
  }

  const handleBack = () => {
    props.switchScreen('StartScreen')
  }

  return(
    <div>
      <h1>Join Game</h1>
      <hr />
      <input id="join-code" type="text" name="code" placeholder="Enter room code"/>
      <br/>
      <input id="join-name" type="text" name="name" placeholder="Enter your name"/>
      <br/><br/>
      <button onClick={handleJoin}>Join</button>
      <button onClick={handleBack}>Back</button>
    </div>
  )
}
export default JoinGame;
