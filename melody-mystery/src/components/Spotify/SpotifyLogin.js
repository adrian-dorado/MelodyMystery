import { Card, CardHeader, CardBody, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { loginUrl } from './SpotifyCreds'

export default function SpotifyLogin() {

    console.log(loginUrl)

    return (
        <Card height={{ sm: '90vh', lg: '80vh' }}>
            <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                <Text>
                    Melody Mystery ~
                </Text>
            </CardHeader>
            <CardBody height='30vh'>
                <Link href={loginUrl}>
                    Login to Spotify
                </Link>
            </CardBody>
        </Card>
    )
}
