import { Text, Card, CardHeader, CardBody, Flex, Grid, GridItem } from '@chakra-ui/react'
import GameGuesses from './GameGuesses'
import GuessButton from './GuessButton'
import SearchBar from './SearchBar'
import SubmitButton from './SubmitButton'
import Instructions from './Instructions'
import { SpotifyContext } from '../App'
import { useContext } from 'react'
import UserProfile from './UserProfile'

export default function GameCard({ guesses, spotifyToken }) {

    // const spotifyToken = useContext(SpotifyContext)

    // console.log("THIS IS THE GAME CARD RENDERING THE TOKEN:", spotifyToken)

    return (
        <Card height={{ sm: '90vh', lg: '80vh' }}>
            <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                <Grid templateColumns={'repeat(5, 1fr)'}>
                    <GridItem>
                        <Text>
                            Melody Mystery ~
                        </Text>
                    </GridItem>
                    <GridItem>
                        <UserProfile spotifyToken={spotifyToken} />
                    </GridItem>
                </Grid>
            </CardHeader>
            <Instructions />
            <CardBody height='30vh'>
                {guesses.map((item, i) => (<GameGuesses text={item} key={i} />))}
            </CardBody>
            <Flex m='3' justify={{ sm: 'space-between', lg: 'space-around' }}>
                <SearchBar />
                <GuessButton />
                <SubmitButton />
            </Flex>
        </Card>
    )
    // }
}