import { Input, Flex} from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SearchBar(props) {

    const [search, setSearch] = useState('')

    return (
        <Flex>
            <Input onChange={e => setSearch(e.target.value)} value={search} variant='outline' placeholder='Know the song?' />
        </Flex>
    )
}
