import Header from 'components/Header';
import { useRouter } from 'next/router'
import cn from 'classnames'
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const isDarkBg = ['/', '/home'].includes(router.pathname)
  const bgColor = isDarkBg ? 'bg-black text-white' : 'bg-white text-dark'
  const textColor = isDarkBg ? 'text-white' : 'text-dark'

  return (
    <div
      className={cn([
        'min-h-screen',
        'transition-colors',
        'duration-800',
        'ease-in-out',
        bgColor,
        textColor
      ])}
    >
      {router.pathname !== '/'
        ? <Header isDarkBg={isDarkBg} />
        : null
      }
      <Component {...pageProps} />
    </div >
  )
}

export default MyApp
