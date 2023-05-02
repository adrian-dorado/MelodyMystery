import { Input, Flex} from '@chakra-ui/react'
import React from 'react'

export default function SearchBar(props) {
    return (
        <Flex>
            <Input w='' variant='outline' placeholder='Know the song?' />
        </Flex>
    )
}
