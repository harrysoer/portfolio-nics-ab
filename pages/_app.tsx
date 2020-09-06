import Header from 'components/Header';
import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import cn from 'classnames'
import 'styles/globals.css';
import { links } from 'constants/links';
import client from 'graphql/apolloClient';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const isDarkBg = [links.home, links.soon].includes(router.pathname);
  const bgColor = isDarkBg ? 'bg-black' : 'bg-white';
  const textColor = isDarkBg ? 'text-white' : 'text-black';

  return (
    <ApolloProvider client={client}>
      <div
        className={cn([
          'flex',
          'flex-col',
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
        <Component {...pageProps} isDarkBg={isDarkBg} />
      </div >
    </ApolloProvider>
  )
}

export default MyApp
