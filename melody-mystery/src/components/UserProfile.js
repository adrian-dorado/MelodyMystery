import { Box } from '@chakra-ui/react'
import { SpotifyGetUser } from '../Spotify/SpotifyGetUser'
import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../Spotify/SpotifyGetToken'

export default function UserProfile() {

    const { spotifyToken } = useAuthContext();

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
