import { useState, createContext, useEffect, useContext } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import GameCard from './Components/GameCard';
import LosingScreen from './Components/LosingScreen'
import SpotifyLogin from './Spotify/SpotifyLogin';
import SpotifyLogout from './Spotify/SpotifyLogout';
import { SpotifyGetUser } from './Spotify/SpotifyGetUser'
import { spotifyGetToken } from './Spotify/SpotifyGetToken';
// import { TokenContext } from './Spotify/SpotifyGetToken';
import { AuthContext } from './Spotify/SpotifyGetToken';

export const GuessesContext = createContext();
export const SpotifyContext = createContext();

function App() {

  const spotifyToken = useContext(AuthContext)
  const [spotifyUser, setSpotifyUser] = useState({})

  const [guesses, setGuesses] = useState([])

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem('token');

  //   if (!token && hash) {
  //     token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

  //     window.location.hash = ''
  //     window.localStorage.setItem('token', token)
  //   }

  //   setSpotifyToken(token)
  // }, [])

  // SpotifyGetToken();
  // console.log(spotifyToken)

  console.log("this is the spoofy token::", spotifyToken)

  SpotifyGetUser(spotifyToken);

  // const logout = () => {
  //   setSpotifyToken('')
  //   window.localStorage.removeItem('token')
  // }

  return (
    <SpotifyContext.Provider
      value={[
        // spotifyToken,
        // setSpotifyToken,
        spotifyUser,
        setSpotifyUser
      ]}>
      <GuessesContext.Provider value={[guesses, setGuesses]}>
        <Flex w={'100vw'} h={'100vh'} justify={'center'} align={'center'}>
          <SpotifyLogin />
          <Container>
            {guesses.length < 7 ? <GameCard guesses={guesses} spotifyToken={spotifyToken} /> : <LosingScreen />}
          </Container>
          <SpotifyLogout />
        </Flex >
      </GuessesContext.Provider>
    </SpotifyContext.Provider>
  )
}

export default App
