import React from 'react'
import { Button } from '@chakra-ui/react'


export default function SkipButton(props) {
    return (
        <Button onClick={props.onClick}>Skip</Button>
    )
}
