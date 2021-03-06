import { AppProps } from 'next/app'
import { useState, FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import GlobalFontStyle from '../css/font'
import ThemeModeContext from '../css/context'
import theme from '../css/theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeMode } from '../types/theme'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../css/tailwind.css'

config.autoAddCss = false
library.add(fab, fas)

const Main = styled.main`
  // 1vh - header + footer height
  min-height: calc(100vh - 9rem);
  background-color: ${(scprops): string => scprops.theme.colors.bg};
`

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  return (
    <>
      <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
        <GlobalFontStyle />
        <ThemeProvider theme={theme[themeMode]}>
          <Header />
          <Main className="transition-all duration-200 ease-in-out">
            <Component {...pageProps} />
          </Main>
          <Footer />
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  )
}

export default App
