
import { Heebo } from '@next/font/google'

import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import '../styles/custom.scss';

const heebo = Heebo({
  weight: ['400', '600', '700', '900'],
  styles: ['normal', 'italic'],
  subsets: ['latin']
});

function MariaCaprixosa({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <main className={heebo.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MariaCaprixosa
