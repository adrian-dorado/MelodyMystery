import { Text, Card, CardHeader, CardBody } from '@chakra-ui/react'
import GameGuesses from './GameGuesses'
import GuessButton from './GuessButton'

export default function GameCard() {
    return (
        <Card>
            <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                <Text>
                    Melody Mystery ~
                </Text>
            </CardHeader>
            <CardBody>
                <GameGuesses />
                <GuessButton />
            </CardBody>
        </Card>
    )
}