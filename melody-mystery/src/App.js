import { useState } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import GameCard from './components/GameCard';
import LosingScreen from './components/LosingScreen'
import SpotifyLogin from './components/SpotifyLogin';


function App() {

  const [guesses, setGuesses] = useState([])

  function addGuess() {
    setGuesses([...guesses, "Incorrect Guess!"])
  }

  function clearGuesses() {
    setGuesses([])
  }

  console.log(guesses)

  return (
    <Flex w={'100vw'} h={'100vh'} justify={'center'} align={'center'}>
      <SpotifyLogin />
      <Container>
        {guesses.length < 7 ? <GameCard addGuess={addGuess} guesses={guesses} /> : <LosingScreen clearGuesses={clearGuesses} guesses={guesses} />}
      </Container>
    </Flex>
  )
}

export default App
