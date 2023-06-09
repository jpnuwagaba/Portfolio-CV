import ScrollToTop from '@/components/ScrollToTop'
import '@/styles/globals.css'
import '@/styles/Home.module.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className='font-jet-brains-mono'>
        <Component {...pageProps} />
        <ScrollToTop />
      </div>
    )
}
