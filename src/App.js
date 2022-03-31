import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [player, setPlayer] = useState([])
  const [error, setError] = useState([])
  // const [playerId, setPlayerId] = useState([])
  let key = '841c2605c6da4040a45c4de11797f56b';

  const handleClick = () => {
    let playerId = Math.floor(Math.random() * 20000) + 10000
    axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/Player/${playerId}?key=${key}`).then(res => {
      // console.log(res)
      setPlayer(res.data)
      console.log(res.data)
    }).catch(err => {
      setError(err)
    })
  }

  // useEffect(() => {
  //   axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/Players/SF?key=${key}`).then(res => {
  //     console.log(res.data)
  //     setPlayer(res.data)
  //   }).catch(err => {
  //     setError(err)
  //   })
  // }, [])

  return (
    <div className='mx-auto w-96'>
        <h1 className='text-lg text-center'>Nfl Wordle</h1>
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
