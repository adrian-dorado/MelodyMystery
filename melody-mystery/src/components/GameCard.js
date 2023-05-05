import { Text, Card, CardHeader, CardBody, Flex, Container } from '@chakra-ui/react'
import GameGuesses from './GameGuesses'
import GuessButton from './SkipButton'
import { useState } from 'react'
import SearchBar from './SearchBar'
import LosingScreen from './LosingScreen'
import SubmitButton from './SubmitButton'
import Instructions from './Instructions'


export default function GameCard() {

    const [guesses, setGuesses] = useState([])

    function addGuess() {
        setGuesses([...guesses, "Incorrect Guess!"])
    }

    console.log(guesses)

    if (guesses.length < 7) {
        return (
            <Card height='90vh'>
                <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                    <Text>
                        Melody Mystery ~
                    </Text>
                </CardHeader>
                <Instructions />
                <CardBody height='30vh'>
                    {guesses.map((item, i) => (<GameGuesses text={item} key={i} />))}
                </CardBody>
                <Flex m='3' justify='space-around'>
                    <SearchBar />
                    <GuessButton onClick={addGuess} />
                    <SubmitButton />
                </Flex>
            </Card>
        )
    } else {
        return (
            <LosingScreen />
        )
    }

}