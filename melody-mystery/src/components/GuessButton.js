import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { GuessesContext } from '../App'


export default function GuessButton() {

    const [guesses, setGuesses] = useContext(GuessesContext);

    function addGuess() {
        setGuesses([...guesses, 'Incorrect Guess!'])
    }


    return (
        <Button mx={{ sm: '2', md: '2' }} onClick={addGuess}>Skip</Button>
    )
}
