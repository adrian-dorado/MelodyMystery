import { getTokenFromUrl } from "./SpotifyTokenGrabber"
import { useContext, useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyContext } from "../App";

const spotify = new SpotifyWebApi();

export function GetSpotifyUser() {

    const [spotifyUser, setSpotifyUser] = useContext(SpotifyContext)
    const [spotifyToken, setSpotifyToken] = useContext(SpotifyContext)

    useEffect(() => {
        const _spotifyToken = getTokenFromUrl().access_token

        window.location.hash = '';

        if (_spotifyToken) {
            setSpotifyToken(_spotifyToken)

            spotify.setAccessToken(_spotifyToken)

            spotify.getMe()
                .then(res => setSpotifyUser(res.spotifyUser))
        }

        console.log(spotifyUser)

    }, [])
}