import { getTokenFromUrl } from "./SpotifyTokenGrabber"
import { useContext, useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyContext } from "../App";

const spotify = new SpotifyWebApi();

export function useSpotifyToken() {

    const [spotifyToken, setSpotifyToken] = useContext(SpotifyContext)

    useEffect(() => {
        const _spotifyToken = getTokenFromUrl().access_token

        window.location.hash = '';

        if (_spotifyToken) {
            setSpotifyToken(_spotifyToken)

            spotify.setAccessToken(_spotifyToken)

            spotify.getMe().then(user => {
                // console.log('THIS IS THE USER WITHIN THE IF STATEMENT:', user)
            })
        }

        let user = spotify.getMe().then(user => {
            // console.log('User!!!!!!!!!!!:', user)
        })

        // console.log("THIS IS THE USER OUTSIDE OF THE IF STATEMENT:", user)

        // console.log('Spoofy Token:', spotifyToken)

    })
}