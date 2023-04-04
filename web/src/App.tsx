import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
