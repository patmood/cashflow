import Head from 'next/head'
import '../components/base.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cashflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
