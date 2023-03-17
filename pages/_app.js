import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import CookieConsent from 'react-cookie-consent'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const [cookieValue, setCookieValue] = useState(false)

  useEffect(() => {
    const cookie = getCookieValue('myAwesomeNashVegasCookie2')
    if (typeof cookie === 'boolean') {
      setCookieValue(cookie)
    }
  }, [cookieValue])

  function getCookieValue(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
  }

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      {cookieValue && <Analytics />}
      <LayoutWrapper>
        <Component {...pageProps} />
        <CookieConsent
          enableDeclineButton
          declineButtonStyle={{ color: '#fff', background: 'green', fontSize: '13px' }}
          location="bottom"
          declineButtonText="Nope"
          buttonText="OK Got It"
          cookieName="myAwesomeNashVegasCookie2"
          style={{ background: '#3671B6', display: 'flex', alignItems: 'center' }}
          buttonStyle={{ color: '#fff', background: 'green', fontSize: '13px' }}
          expires={150}
        >
          This app uses cookies to enhance the user experience, as well as analytics that capture
          screen clicks and mouse movements (PostHog.com). That is all we track. Enjoy the music 🤠.
        </CookieConsent>
      </LayoutWrapper>
    </ThemeProvider>
  )
}
