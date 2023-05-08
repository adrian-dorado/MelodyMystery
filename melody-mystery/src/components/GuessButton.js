import React from 'react'
import { Button } from '@chakra-ui/react'


export default function GuessButton(props) {
    return (
        <Button mx={{sm: '2', md: '2'}} onClick={props.onClick}>Skip</Button>
    )
}
