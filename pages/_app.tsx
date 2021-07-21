import { ChakraProvider } from '@chakra-ui/react'

import customTheme from '../styles/theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
          </ChakraProvider>
  )
}

export default MyApp