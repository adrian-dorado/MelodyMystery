import React from 'react'
import { Button } from '@chakra-ui/react'


export default function TryAgain(props) {
    return (
        <Button onClick={props.onClick}>Guess a different song?</Button>
    )
}
