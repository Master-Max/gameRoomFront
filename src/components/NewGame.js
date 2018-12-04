import React from 'react';

const NewGame = (props) => {

  const handleCreate = (e) => {
    const name = document.getElementById('new-name').value
    props.createRoomAndUser(name)
  }

  const handleBack = () => {
    props.switchScreen('StartScreen')
  }

  return(
    <div>
      <h1>New Game</h1>
      <hr />
      <input id="new-name" type="text" name="name" placeholder="Enter your name"/>
      <br/><br/>
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleBack}>Back</button>
    </div>
  )
}
export default NewGame;
