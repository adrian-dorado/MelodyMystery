import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { GuessesContext } from '../App'
import { CountContext } from '../App'


export default function TryAgain() {

    const [, setGuesses] = useContext(GuessesContext)
    const [, setCount] = useContext(CountContext)
    const clearCount = () => setCount(6)
    const clearGuesses = () => setGuesses([])
    const buttonClick = () => {
        clearCount();
        clearGuesses();
    }

    return (
        <Button onClick={buttonClick}>Guess a different song?</Button>
    )
}
