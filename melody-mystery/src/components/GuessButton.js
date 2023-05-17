import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { GuessesContext } from '../App'
import { CountContext } from '../App';


export default function GuessButton() {

    const [guesses, setGuesses] = useContext(GuessesContext);
    const [count, setCount] = useContext(CountContext);

    function addGuess() {
        setGuesses([...guesses, 'Incorrect Guess!'])
    }

    function subCount() {
        setCount(count - 1)
    }

    function buttonClick() {
        addGuess();
        subCount();
    }


    return (
        <Button mx={{ sm: '2', md: '2' }} onClick={buttonClick}>Skip</Button>
    )
}
