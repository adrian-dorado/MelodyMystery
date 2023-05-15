import { useState, useEffect, createContext } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import GameCard from './Components/GameCard';
import LosingScreen from './Components/LosingScreen'
import SpotifyLogin from './Spotify/SpotifyLogin';
import { getTokenFromUrl } from './Spotify/SpotifyTokenGrabber';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

export const GuessesContext = createContext();
export const SpotifyTokenContext = createContext();

function App() {

  const [spotifyToken, setSpotifyToken] = useState('')

  const [guesses, setGuesses] = useState([])

  console.log("This is the list of incorrect guesses", guesses)

  return (
    <SpotifyTokenContext.Provider value={[spotifyToken, setSpotifyToken]}>
      <GuessesContext.Provider value={[guesses, setGuesses]}>
        <Flex w={'100vw'} h={'100vh'} justify={'center'} align={'center'}>
          {!spotifyToken ? <SpotifyLogin /> : <Container> Logged In </Container>}
          <Container>
            {guesses.length < 7 ? <GameCard /> : <LosingScreen />}
          </Container>
        </Flex >
      </GuessesContext.Provider>
    </SpotifyTokenContext.Provider>
  )
}

export default App
