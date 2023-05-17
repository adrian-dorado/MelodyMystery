import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SpotifyTokenContext } from '../App'

export default function UserProfile() {

    const [spotifyToken] = useContext(SpotifyTokenContext)

    if (spotifyToken) {
        return (
            <Box>UserProfile</Box>
        )
    } else {
        return (
            <Box>what</Box>
        )
    }

}
