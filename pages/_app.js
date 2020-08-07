import Link from "next/link";
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <main>
    <nav>
      <Link href="/">
        <a>lazysizes lib</a>
      </Link>
      <Link href="/with">
        <a>img with dimensions</a>
      </Link>
      <Link href="/without">
        <a>img without dimensions</a>
      </Link>
    </nav>
    <Component {...pageProps} />
  </main>
}