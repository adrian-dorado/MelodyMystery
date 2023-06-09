import { Card, CardHeader, CardBody, Text, Flex, Button } from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'

export default function SpotifyLogout({logout}) {

    // const [logout] = useToken();

    const goodbye = async e => {
        // e.preventDefault();
        logout();
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