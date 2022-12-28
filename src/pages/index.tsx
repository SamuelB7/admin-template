import Head from 'next/head'
import { Inter } from '@next/font/google'

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

        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-500 to-blue-500">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>

      </main>
    </>
  )
}
