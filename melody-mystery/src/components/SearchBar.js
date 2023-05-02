import { Input, Flex} from '@chakra-ui/react'
import React from 'react'

export default function SearchBar() {
    return (
        <Flex>
            <Input m='30px' w='80%' variant='outline' placeholder='Know the song? Search for the artist / title'></Input>
        </Flex>
    )
}
