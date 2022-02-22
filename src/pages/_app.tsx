import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link
          href="../../public/asset/eudoxus-font/EudoxusSans-ExtraBold.woff2"
          rel="stylesheet"
        />
        <link
          href="../../public/asset/eudoxus-font/EudoxusSans-Bold.woff2"
          rel="stylesheet"
        />
        <link
          href="../../public/asset/eudoxus-font/EudoxusSans-Regular.woff2"
          rel="stylesheet"
        />
        <link
          href="../../public/asset/eudoxus-font/EudoxusSans-Medium.woff2"
          rel="stylesheet"
        />
        <link
          href="../../public/asset/eudoxus-font/EudoxusSans-Light.woff2"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
