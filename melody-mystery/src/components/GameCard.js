import { Text, Card, CardHeader, CardBody } from '@chakra-ui/react'

export default function GameCard() {
    return (
        <Card>
            <CardHeader align='center' borderTopRadius='5px' bgColor='green.400'>
                <Text>
                    Melody Mystery ~
                </Text>
            </CardHeader>
            <CardBody>
                Test Test Test
            </CardBody>
        </Card>
    )
}