import { Box } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { SpotifyTokenContext } from '../App'

export default function UserProfile() {

    const [spotifyToken] = useContext(SpotifyTokenContext)

    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        fetch("https://api.spotify.com/v1/me", { method: "GET", headers: { Authorization: `Bearer ${spotifyToken}` } })
            .then(res => res.json())
            .then(res => setUserProfile(res.userProfile));

    }, [])

    console.log(userProfile)

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
