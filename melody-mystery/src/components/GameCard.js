import { Text, Card, CardHeader, CardBody, Flex } from '@chakra-ui/react'
import GameGuesses from './GameGuesses'
import GuessButton from './SkipButton'
import { useState } from 'react'
import SearchBar from './SearchBar'


export default function GameCard() {

    const [guesses, setGuesses] = useState([])

    function addGuess() {
        setGuesses([...guesses, "Incorrect Guess!"])
    }

    console.log(guesses)

    if (guesses.length < 7) {
        return (
            <Card height='80vh'>
                <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                    <Text>
                        Melody Mystery ~
                    </Text>
                </CardHeader>
                <CardBody height='30vh'>
                    {guesses.map((item, i) => (<GameGuesses text={item} />))}
                </CardBody>
                <Flex m='30px'  justify='space-between'>
                    <SearchBar />
                    <GuessButton onClick={addGuess} />
                </Flex>
            </Card>
        )
    } else {
        return (
            <Card height='80vh'>
                <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                    <Text>
                        Melody Mystery ~
                    </Text>
                </CardHeader>
                <CardBody>
                    <Text>
                        I'm sorry, you took too many tries to guess today's melody.
                    </Text>
                </CardBody>
            </Card>
        )
    }

}