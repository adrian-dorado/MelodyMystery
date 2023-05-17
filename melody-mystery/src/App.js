import { useState, createContext, useEffect } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import GameCard from './Components/GameCard';
import LosingScreen from './Components/LosingScreen'
import SpotifyLogin from './Spotify/SpotifyLogin';
import SpotifyLogout from './Spotify/SpotifyLogout';
// import { TokenContext } from './Spotify/SpotifyGetToken';

export const GuessesContext = createContext();
export const CountContext = createContext();
export const SpotifyTokenContext = createContext();

function App() {

  const [spotifyToken, setSpotifyToken] = useState('')
  // const [spotifyUser, setSpotifyUser] = useState({})

  const [guesses, setGuesses] = useState([])
  const [count, setCount] = useState(6)

  console.log(guesses)

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash.substring(1).split('&')
        .find(elem => elem.startsWith('access_token'))
        .split('=')[1]

      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }

    setSpotifyToken(token)
  }, [])

  // SpotifyGetToken();
  // console.log(spotifyToken)

  console.log("This is the spoofy token::", spotifyToken)  // SpotifyGetUser(spotifyToken);

  const logout = () => {
    setSpotifyToken('')
    window.localStorage.removeItem('token')
  }

  return (
    <SpotifyTokenContext.Provider value={[spotifyToken, setSpotifyToken]}>
      <GuessesContext.Provider value={[guesses, setGuesses]}>
        <CountContext.Provider value={[count, setCount]}>
          <Flex w={'100vw'} h={'100vh'} justify={'center'} align={'center'}>
            <SpotifyLogin />
            <Container>
              {guesses.length < 6 ? <GameCard guesses={guesses} /> : <LosingScreen />}
              {/* <GameCard guesses={guesses} spotifyToken={spotifyToken} /> */}
            </Container>
            <SpotifyLogout logout={logout} />
          </Flex >
        </CountContext.Provider>
      </GuessesContext.Provider>
    </SpotifyTokenContext.Provider>
  )
}

export default App
