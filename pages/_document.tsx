import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { GoogleFonts } from 'next-google-fonts'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
        <Head />
        <body>
          
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}