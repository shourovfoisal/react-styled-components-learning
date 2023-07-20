import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  dark: {
    primary: "#222",
    text: "#ddd"
  },
  light: {
    primary: "#ddd",
    text: "#222"
  },
  fontFamily: "Segoe UI"
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${ (props) => {
      return props.theme.fontFamily;
    } };
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
