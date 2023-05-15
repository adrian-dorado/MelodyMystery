import React from 'react'
import { Text, Card, CardHeader, CardBody } from '@chakra-ui/react'

export default function LosingScreen(props) {
    return (
        <Card height={{sm: '40vh', lg: '80vh'}}>
            <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                <Text>
                    Melody Mystery ~
                </Text>
            </CardHeader>
            <CardBody>
                <Text as='u'>
                    You did it!
                </Text>
            </CardBody>
        </Card>
    )
}
