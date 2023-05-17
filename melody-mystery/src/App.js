import { useState, createContext, useEffect } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import GameCard from './Components/GameCard';
import LosingScreen from './Components/LosingScreen'
import SpotifyLogin from './Spotify/SpotifyLogin';
import { loginUrl } from './Spotify/SpotifyCreds';
// import { spotifyGetUser } from './Spotify/SpotifyGetUser';

export const GuessesContext = createContext();
export const SpotifyContext = createContext();

function App() {

  const [spotifyToken, setSpotifyToken] = useState('')
  const [spotifyUser, setSpotifyUser] = useState([])

  const [guesses, setGuesses] = useState([])

  console.log("This is the list of incorrect guesses", guesses)

  // GetSpotifyUser()

  const requestSpotifyAuthorization = () => {
    window.location.href = loginUrl;
  }

  const spotifyGetToken = () => {

    const hashParams = {};
    const regex = /([^&;=]+)=?([^&;]*)/g;
    const query = window.location.hash.substring(1);

    let match;

    while (match = regex.exec(query)) {
      hashParams[match[1]] = decodeURIComponent(match[2]);
    }

    return hashParams.access_token;

  }

  function spotifyGetUserProfile(accessToken) {
    const profileUrl = 'https://api.spotify.com/v1/me';

    fetch(profileUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log('User Profile:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const accessToken = spotifyGetToken();

  if (!accessToken) {
    if (window.location.hash.indexOf('error') !== -1) {
      // Display error message to the user
      const errorMessage = decodeURIComponent(window.location.hash.split('&')[0].split('=')[1]);
      console.error('Authorization Error:', errorMessage);
    } else {
      requestSpotifyAuthorization();
    }
  } else {
    spotifyGetUserProfile(accessToken);
  }


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
