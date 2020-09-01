import Header from 'components/Header';
import { useRouter } from 'next/router'
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const isDarkBg = ['/', '/home'].includes(router.pathname)
  const bgColor = isDarkBg ? 'bg-black' : 'bg-white'

  return (
    <div className={`min-h-screen ${bgColor}`}>
      {router.pathname !== '/'
        ? <Header isDarkBg={isDarkBg} />
        : null
      }
      <Component {...pageProps} />
    </div >
  )
}

export default MyApp
