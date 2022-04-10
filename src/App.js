import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [player, setPlayer] = useState([])
  // const [error, setError] = useState([])
  const [players, setPlayers] = useState([])
  // const [playerId, setPlayerId] = useState([])
  let key = '841c2605c6da4040a45c4de11797f56b';

  axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/Players?key=${key}`).then(res => {
      setPlayers(res.data)
  })

  const handleClick = () => {
    setPlayer(players[Math.floor(Math.random()*players.length)])
  }

  return (
    <div className='mx-auto w-96'>
        <h1 className='text-lg text-center'>Nfl Wordle</h1>
          <div className='wrapper'>
            <div className='search-input'>
              <input type='text' placeholder='Enter Player Name'/>
              <div className='autocom-box'>

              </div>
              <div className='icon'><i className='fas fa-search'></i></div>
            </div>
          </div>
          <h2>{player.Name}</h2>
          <h2>{player.Age}</h2>
          <h2>{player.CurrentTeam}</h2>
          <h2>{player.Height}</h2>
          <h2>{player.Position}</h2>
          <h2>{player.Number}</h2>
        <button onClick={handleClick}>Get player</button>
        {/* <{!player : <h2>{error.message}</h2>}> */}
    </div>
  );
}

export default App;
