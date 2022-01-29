import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'
import { H2 } from '../H2'

interface IProps {
  title: string
}

export const Banner: FC<IProps> = ({ title }) => {
  return (
    <Box 
      bg='gray.300'
      py={10}
    >
      <Container maxW='container.lg'>
        <Flex alignItems='center' gap={10} justifyContent='center' margin='0 auto' >
          <H2>{title}</H2>
          <Box bg='gray.400' position='relative' width='30%'>
            <Image 
              src='/photo.jpg' 
              layout="responsive"
              width={300}
              height={400} 
              objectFit='cover' 
              alt='' 
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}