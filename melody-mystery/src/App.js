import { useState, createContext, useEffect } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import GameCard from './Components/GameCard';
import LosingScreen from './Components/LosingScreen'
import SpotifyLogin from './Spotify/SpotifyLogin';
import { clientId, redirectUri, redirectUriCallback, authEndpoint, loginUrl, scopes } from './Spotify/SpotifyCreds';
// import { spotifyGetUser } from './Spotify/SpotifyGetUser';

export const GuessesContext = createContext();
export const SpotifyContext = createContext();

const params = new URLSearchParams(window.location.search);
const code = params.get('code');

function App() {

  const [spotifyToken, setSpotifyToken] = useState('')
  const [spotifyUser, setSpotifyUser] = useState([])

  const [guesses, setGuesses] = useState([])

  async function requestSpotifyAuthorization() {

    let profile = undefined;

    if (!code) {
      redirectToSpotifyAuthFlow(clientId);
    } else {
      const accessToken = await spotifyGetAccessToken(clientId, code);
      profile = await fetchProfile(accessToken);
      console.log(profile);
      // setSpotifyUser(profile);
    }
    // setSpotifyUser(profile);
    // setSpotifyUser(profile)

  }

  async function redirectToSpotifyAuthFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier)

    localStorage.setItem('verifier', verifier);

    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('response_type', 'code');
    params.append('redirect_uri', redirectUri);
    params.append('scope', scopes.join(' '));
    params.append('code_challenge_method', 'S256');
    params.append('code_challenge', challenge);

    window.location.href = `${authEndpoint}?${params.toString()}`;

  }

  function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  async function spotifyGetAccessToken(clientId, code) {
    const verifier = localStorage.getItem('verifier');

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", redirectUri);
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params
    });

    const { access_token } = await result.json();
    return access_token;
  }

  async function fetchProfile(token) {
    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
  }

  requestSpotifyAuthorization();


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
