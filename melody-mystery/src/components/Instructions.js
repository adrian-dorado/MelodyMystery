import { Flex, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'

import { CountContext } from '../App'

export default function Instructions() {

    const [count, setCount] = useContext(CountContext)
    console.log(count)


    return (
        <Flex justify='center' m='2' align='center' flexDirection='column'>
            <Text>Welcome to Melody Mystery!</Text>
            <Text>You have {count} chances to guess today's melody</Text>
        </Flex>
    )
}
