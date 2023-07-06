import type { AppProps } from 'next/app'
import "../styles/navbar.css"
import "../styles/main.css"
import "../styles/button.css"
import "../styles/card.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
