import { createContext, useState, useEffect } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import GameCard from './components/GameCard';
import LosingScreen from './components/LosingScreen'
import SpotifyLogin from './components/Spotify/SpotifyLogin';
import { useSpotifyToken } from './components/Spotify/SpotifyTokenContext';
import { getTokenFromUrl } from './components/Spotify/SpotifyTokenGrabber';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

export const TokenContext = createContext();

function App() {

  const [spotifyToken, setSpotifyToken] = useState('')

  useEffect(() => {
    console.log('Spotify URI Function', getTokenFromUrl())
    const _spotifyToken = getTokenFromUrl().access_token

    window.location.hash = '';

    console.log('Spotify Token'._spotifyToken)

    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken)

      spotify.setAccessToken(_spotifyToken)

      spotify.getMe().then(user => {
        console.log('User:', user)
      })
    }

    console.log('Spoofy Token:', spotifyToken)

  })

  const [guesses, setGuesses] = useState([])

  function addGuess() {
    setGuesses([...guesses, 'Incorrect Guess!'])
  }

  function clearGuesses() {
    setGuesses([])
  }

  console.log(guesses)

  return (
    <TokenContext.Provider value={[spotifyToken, setSpotifyToken]}>
      <Flex w={'100vw'} h={'100vh'} justify={'center'} align={'center'}>
        {/* {!spotifyToken ? <SpotifyLogin /> : <Container> Logged In </Container>} */}
        <Container>
          {guesses.length < 7 ? <GameCard addGuess={addGuess} guesses={guesses} /> : <LosingScreen clearGuesses={clearGuesses} guesses={guesses} />}
        </Container>
      </Flex>
    </TokenContext.Provider>
  )
}

export default App
