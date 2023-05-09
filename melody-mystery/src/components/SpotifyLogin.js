import { Card, CardHeader, CardBody, Text, Link } from '@chakra-ui/react'
import React from 'react'

export default function SpotifyLogin() {

    const CLIENT_ID = 'af23c74ca8c64f3d91c2447fe60d1457'
    const REDIRECT_URI = 'http://localhost:3000'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'

    return (
        <Card height={{ sm: '90vh', lg: '80vh' }}>
            <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                <Text>
                    Melody Mystery ~
                </Text>
            </CardHeader>
            <CardBody height='30vh'>
                <Link href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} isExternal>
                    Login to Spotify
                </Link>
            </CardBody>
        </Card>
    )
}
