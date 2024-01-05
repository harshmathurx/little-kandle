import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
 
const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return <div className={`${montserrat.className}`}>
  <Head>
  <title>Little Kandle</title>
  </Head>
    <Layout>
      <Navbar />
      < Component {...pageProps} />
    </Layout>
  </div>
}
