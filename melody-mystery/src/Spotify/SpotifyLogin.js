import { Card, CardHeader, CardBody, Text, Link, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { loginUrl } from './SpotifyCreds'

export default function SpotifyLogin() {

    // console.log(loginUrl)

    return (
        <Card>
            <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                <Text>
                    Melody Mystery ~
                </Text>
            </CardHeader>
            <CardBody height='30vh'>
                <Flex justify={'center'} align={'center'} flexDirection={'column'}>
                    <FaSpotify size={'100'} />
                    <Link href={loginUrl}>
                        <Button my={'15px'} backgroundColor={'c.spotifyGreen'}>
                            Login with Spotify
                        </Button>
                    </Link>
                </Flex>
            </CardBody>
        </Card>
    )
}
