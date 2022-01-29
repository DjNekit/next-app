import { Text, TextProps } from '@chakra-ui/react'
import React, { FC } from 'react'

interface IProps {

}

export const H2: FC<IProps & TextProps> = ({ children, ...textProps }) => {
  return (
    <Text
      fontSize='4xl'
      fontWeight='normal'
      p={1}
      {...textProps}
    >
      {children}
    </Text>
  )
}