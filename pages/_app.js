/* eslint-disable react/prop-types */
import Link from 'next/link'

import '../css/tailwind.css'

function App({ Component, pageProps }) {
  return (
    <>
      <header className="flex justify-between">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </header>
      <Component {...pageProps} />
      <footer>footer</footer>
    </>
  )
}

export default App
