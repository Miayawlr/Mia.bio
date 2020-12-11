import Head from 'next/head'
import React, { useCallback, useState, useEffect, useMemo } from 'react'
import { GeistProvider, CssBaseline, useTheme } from '@geist-ui/react'
import { ThemeProvider } from 'styled-components'
import ThemeConfig from '../lib/components/ThemeConfig'
import useDomClean from '../lib/utils/use-dom-clean'
import { PrismBaseline } from '@geist-ui/react-prism'
import BLOG from 'blog.config'
function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light')
  const theme = useTheme()
  const changeHandle = useCallback((isDark) => {
    const next = isDark ? 'light' : 'dark'
    setThemeType(next)
  }, [])
  useEffect(() => {
    if (typeof localStorage !== 'object') return null
    const themeType = localStorage.getItem('theme')
    setThemeType(themeType === 'dark' ? 'dark' : 'light')
  }, [])
  useEffect(() => localStorage.setItem('theme', themeType), [themeType])
  useDomClean()
  return (
    <React.Fragment>
      <Head>
        <title>{BLOG.title}</title>
        <meta name="author" content={BLOG.author} />

        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <GeistProvider theme={{ type: themeType }}>
        <CssBaseline />
        <PrismBaseline />
        <ThemeProvider theme={theme}>
          <ThemeConfig onChange={changeHandle}>
            <Component {...pageProps} />
          </ThemeConfig>
        </ThemeProvider>
        <style global jsx>{`
          @media only screen and (max-width: 767px) {
            html {
              font-size: 15px;
            }
          }
        `}</style>
      </GeistProvider>
    </React.Fragment>
  )
}

export default MyApp
