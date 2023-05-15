import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { GuessesContext } from '../App'


export default function TryAgain() {

    const [guesses, setGuesses] = useContext(GuessesContext)
    const clearGuesses = () => setGuesses([])

    return (
        <Button onClick={clearGuesses}>Guess a different song?</Button>
    )
}
