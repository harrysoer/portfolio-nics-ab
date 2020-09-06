import Head from "next/head";
import PageTitle from "components/PageTitle";

const works = () => {
  return (
    <>
      <Head>
        <title>Nics - Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageTitle content="Works" />
      </div>
    </>
  )
}

export default works
