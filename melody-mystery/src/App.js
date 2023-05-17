import { useState, createContext, useEffect } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import GameCard from './Components/GameCard';
import LosingScreen from './Components/LosingScreen'
import SpotifyLogin from './Spotify/SpotifyLogin';
import { loginUrl, scopes } from './Spotify/SpotifyCreds';
// import { spotifyGetUser } from './Spotify/SpotifyGetUser';

export const GuessesContext = createContext();
export const SpotifyContext = createContext();

function App() {

  const [spotifyToken, setSpotifyToken] = useState('')
  const [spotifyUser, setSpotifyUser] = useState([])

  const [guesses, setGuesses] = useState([])



  return (
    <SpotifyContext.Provider
      value={[
        spotifyToken,
        setSpotifyToken,
        spotifyUser,
        setSpotifyUser
      ]}>
      <GuessesContext.Provider value={[guesses, setGuesses]}>
        <Flex w={'100vw'} h={'100vh'} justify={'center'} align={'center'}>
          {!spotifyToken ? <SpotifyLogin /> : <Container> Logged In </Container>}
          <Container>
            {guesses.length < 7 ? <GameCard guesses={guesses} /> : <LosingScreen />}
          </Container>
        </Flex >
      </GuessesContext.Provider>
    </SpotifyContext.Provider>
  )
}

export default App
