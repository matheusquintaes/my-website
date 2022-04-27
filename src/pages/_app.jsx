import Head from 'next/head'

import GlobalStyles from '../styles/global'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matheus Quintaes</title>
        <link rel="icon" type="image/x-icon" href="static/favicon.ico" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="Front-end UX/UI developer with 6 years experience in webnts"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
