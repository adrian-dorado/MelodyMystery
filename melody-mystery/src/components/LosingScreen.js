import React from 'react'
import { Text, Card, CardHeader, CardBody, Flex } from '@chakra-ui/react'
import TryAgain from './TryAgain'

export default function LosingScreen() {

    console.log('🚫 You lost! 🚫')

    return (
        <Card height={{ sm: '90vh', lg: '80vh' }}>
            <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                <Text>
                    Melody Mystery ~
                </Text>
            </CardHeader>
            <CardBody>
                <Text as='u'>
                    I'm sorry, you took too many tries to guess today's melody.
                </Text>
            </CardBody>
            <Flex m='3' justify='space-around'>
                <TryAgain />
            </Flex>
        </Card>
    )
}
