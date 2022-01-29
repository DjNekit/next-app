import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { Wrapper } from './style'

interface IProps {}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      {/* <Container maxW='container.xl' py={5}> */}
        <div>
          {children}
        </div>
        {/* <Footer /> */}
      {/* </Container> */}
    </Wrapper>
  )
}