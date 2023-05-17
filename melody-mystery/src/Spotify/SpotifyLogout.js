import { Card, CardHeader, CardBody, Text, Link, Flex, Button } from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'
import { loginUrl } from './SpotifyCreds'
// import { useSpotifyToken } from './SpotifyTokenContext'
import { useToken } from './SpotifyGetToken'

export default function SpotifyLogout() {

    const [logout] = useToken();

    const goodbye = async e => {
        // e.preventDefault();
        await logout();
        console.log('Logged Out');
    }


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
                    <Button onClick={goodbye} my={'15px'} backgroundColor={'c.spotifyGreen'}>
                        Logout with Spotify
                    </Button>
                </Flex>
            </CardBody>
        </Card>
    )
}