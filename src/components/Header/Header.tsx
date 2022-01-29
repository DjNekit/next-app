import { Box, Center, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface IProps {

}

export const Header: FC<IProps> = ({  }) => {
  return (
    <Center p={5} pl={10} bg='#583BB6' >
      <Text
        bg='white'
        bgClip='text'
        fontSize='4xl'
        fontWeight='extrabold'
        fontFamily='Lobster'
        p={1}
      >
        Вместе и Навсегда!
      </Text>
    </Center>
  )
}