import React from 'react'
import { Text, Card, CardHeader, CardBody } from '@chakra-ui/react'

export default function LosingScreen() {
    return (
        <Card height='90vh'>
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
        </Card>
    )
}
