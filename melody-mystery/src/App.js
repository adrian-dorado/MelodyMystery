import { useState, createContext } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import GameCard from './Components/GameCard';
import LosingScreen from './Components/LosingScreen'
import SpotifyLogin from './Spotify/SpotifyLogin';

export const GuessesContext = createContext();
export const SpotifyContext = createContext();

function App() {

  const [spotifyToken, setSpotifyToken] = useState('')
  const [spotifyUser, setSpotifyUser] = useState([])

  const [guesses, setGuesses] = useState([])

  console.log("This is the list of incorrect guesses", guesses)

  // GetSpotifyUser()

  

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
