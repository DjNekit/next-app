import { Box, Flex, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { FC } from 'react'

interface IProps {}

export const Navbar: FC<IProps> = ({  }) => {
  return (
    <Box 
      boxShadow='0px 8px 6px 0px rgba(34, 60, 80, 0.2)'
      bg='white'
      position='sticky'
      top={0}
      zIndex={1000}
    >
      <Box margin='0 auto' w='80%'>
        <Flex alignItems='center' gap={10}>
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'
            fontFamily='Lobster'
            p={1}
          >
            ВМ
          </Text>
          <Flex gap={15}>
            <Link href='/'>Главная</Link>
            <Link href='/photo'>Фотосъёмка</Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}