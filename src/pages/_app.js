
import { Heebo } from '@next/font/google'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss';

const heebo = Heebo({
  weight: ['400', '600', '700', '900'],
  styles: ['normal', 'italic'],
  subsets: ['latin']
});

function MariaCaprixosa({ Component, pageProps }) {
  return (
    <main className={heebo.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MariaCaprixosa
