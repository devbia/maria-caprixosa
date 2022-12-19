
import { Heebo } from '@next/font/google'

import Head from 'next/head';
import FilterContextProvider from '../hooks/FilterContext'; 
import FilterFormProvider from '../hooks/FilterFormContext'; 
import '../styles/globals.css';

const heebo = Heebo({
  weight: ['400', '600', '700', '900'],
  styles: ['normal', 'italic'],
  subsets: ['latin']
});

function MariaCaprixosa({ Component, pageProps }) {
  return (
    <>
     <FilterFormProvider>
      <FilterContextProvider>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <main className={heebo.className}>
        <Component {...pageProps} />
      </main>
      </FilterContextProvider>
    </FilterFormProvider>
    </>
  )
}

export default MariaCaprixosa
