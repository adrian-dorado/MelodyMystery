import { Flex, Text } from "@chakra-ui/react";

export default function GameGuesses() {

    return (
        <Flex justify='center' border='2px' p='10px' borderRadius='5px' m='10px' borderColor='green.400' borderStyle='solid'>
            <Text>Try Again!</Text>
        </Flex>
    );
};