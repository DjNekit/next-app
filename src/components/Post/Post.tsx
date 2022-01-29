import { Box, Container, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'
import { H2 } from '../H2'

interface IProps {
  title: string
}

export const Post: FC<IProps> = ({ title }) => {
  return (
    <Box>
      <H2>{title}</H2>
      <Text p={1} color='gray.600'>29 января 2022 г.</Text>
      <Box position='relative' p={1}>
        <Image src='/post1.jpg' width='500' height='350' layout='responsive' alt='' objectFit='cover'/>
      </Box>
      <Container>
        <Text p={1}>
          Блаблабла сегодня мы блаблабла с змечательными людьми блабла всем добра
        </Text>
      </Container>
    </Box>
  )
}