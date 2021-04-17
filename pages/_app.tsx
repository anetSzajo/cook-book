import '../styles/globals.css'
import {ChakraProvider, extendTheme, Theme} from "@chakra-ui/react"

const theme: Theme = extendTheme({
        sizes: {
            container: {
                lg: {
                    h: "50px",
                    fontSize: "lg",
                    px: "30px",
                },
                xl: {
                    h: "80px",
                    fontSize: "lg",
                    px: "30px",
                }
            }
        },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
