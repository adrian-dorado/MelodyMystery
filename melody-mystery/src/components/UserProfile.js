import { Box } from '@chakra-ui/react'
import { SpotifyGetUser } from '../Spotify/SpotifyGetUser'
import React, { useState, useEffect, useContext } from 'react'
import { useAuthContext } from '../Spotify/SpotifyGetToken'
import { SpotifyTokenContext } from '../App'

export default function UserProfile() {

    const spotifyToken = useContext(SpotifyTokenContext)

    if (spotifyToken) {
        return (
            <Box>UserProfile</Box>
        )
    } else {
        return (
            <Box>Not Logged In</Box>
        )
    }

}
