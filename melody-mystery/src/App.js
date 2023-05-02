import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameCard from './components/GameCard';
import { Container } from '@chakra-ui/react';


function App() {
  return (
    <Container align='center' justify='center'>
      <GameCard />
    </Container>
  );
}

export default App;