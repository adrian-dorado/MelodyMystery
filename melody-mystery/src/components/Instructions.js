import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Instructions() {
    return (
        <Flex justify='center' m='2' align='center' flexDirection='column'>
            <Text>Welcome to Melody Mystery!</Text>
            <Text>You have 6 chances to guess today's melody</Text>
        </Flex>
    )
}
