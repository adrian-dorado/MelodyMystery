import { Flex, Text } from "@chakra-ui/react";

export default function GameGuesses() {

    return (
        <Flex justifyContent='center' border='2px' m='10px' borderColor='green.400' borderStyle='solid'>
            <Text>Try Again!</Text>
        </Flex>
    );
};