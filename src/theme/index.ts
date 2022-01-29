import { extendTheme } from "@chakra-ui/react"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
   font-size: 18px;

   @media (max-width: 992px) {
    font-size: 14px;
   }

   @media (max-width: 768px) {
    font-size: 13px;
   }

   @media (max-width: 552px) {
    font-size: 12px;
   }
  }
`

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Roboto, sans-serif',
      },
    },
  }
})

// export const theme = {
//   styles: {
    // global: {
    //   'html, body': {
    //     fontFamily: 'Roboto, sans-serif'
    //   },
    //   a: {
        
    //   },
    // },
//   },
// }