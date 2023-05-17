import { Box } from '@chakra-ui/react'
import { SpotifyGetUser } from '../Spotify/SpotifyGetUser'
import React, { useState, useEffect } from 'react'

export default function UserProfile({spotifyToken}) {

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
