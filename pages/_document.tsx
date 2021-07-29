import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { GoogleFonts } from 'next-google-fonts'
import theme from '../styles/theme'
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}