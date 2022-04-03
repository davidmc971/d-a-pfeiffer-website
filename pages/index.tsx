import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import App from '../components/App'

const Home: NextPage = () => {
  return (
    <div id='root'>
      <Head>
        <title>David Alexander Pfeiffer</title>
        <meta name="description" content="Information about David Alexander Pfeiffer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
    </div>
  )
}

export default Home
