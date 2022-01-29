import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import { GlobalStyle, theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ChakraProvider >
  )
}

export default MyApp
