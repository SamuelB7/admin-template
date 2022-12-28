import Head from 'next/head'
import { Inter } from '@next/font/google'
import Layout from '../components/templates/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin template</title>
        <meta name="description" content="Admin template made with nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <Layout title='Home page' caption='Simple admin template'>
          <h3>Content</h3>
        </Layout>

      </main>
    </>
  )
}
