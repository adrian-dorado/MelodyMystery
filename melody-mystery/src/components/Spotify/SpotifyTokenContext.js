import { getTokenFromUrl } from "./SpotifyTokenGrabber"
import { createContext, useContext, useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { TokenContext } from "../../App";

const spotify = new SpotifyWebApi();

const TokenContext = createContext(null)
const useSpotifyToken = () => useContext(TokenContext)

// export function useSpotifyToken() {

//     const [spotifyToken, setSpotifyToken] = useContext(TokenContext)
//     // const [spotifyToken, setSpotifyToken] = useState('')

//     useEffect(() => {
//         console.log('Spotify URI Function', getTokenFromUrl())
//         const _spotifyToken = getTokenFromUrl().access_token

//         window.location.hash = '';

//         console.log('Spotify Token'._spotifyToken)

//         if (_spotifyToken) {
//             setSpotifyToken(_spotifyToken)

//             spotify.setAccessToken(_spotifyToken)

//             spotify.getMe().then(user => {
//                 console.log('User:', user)
//             })
//         }

//         console.log('Spoofy Token:', spotifyToken)

//     })
// }