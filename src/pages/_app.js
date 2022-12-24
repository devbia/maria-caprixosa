
import { Heebo } from '@next/font/google'

import Head from 'next/head';
import FilterContextProvider from '../hooks/FilterContext'; 
import FilterFormProvider from '../hooks/FilterFormContext'; 
import FilterMobileProvider from '../hooks/FilterMobileContext'; 
import TabContextProvider from '../hooks/TabContext';
import FilterMobileContext from '../hooks/ShowAlertContext';

import '../styles/globals.css';
import DataFilterProvider from '../hooks/DataFilterContext';

const heebo = Heebo({
  weight: ['400', '600', '700', '900'],
  styles: ['normal', 'italic'],
  subsets: ['latin']
});

function MariaCaprixosa({ Component, pageProps }) {
  return (
    <>
      <DataFilterProvider>
        <FilterMobileContext>
          <TabContextProvider>
            <FilterMobileProvider>
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
            </FilterMobileProvider>
          </TabContextProvider>
        </FilterMobileContext>
      </DataFilterProvider>
    </>
  )
}

export default MariaCaprixosa
