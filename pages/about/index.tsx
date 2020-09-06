import Head from "next/head";
import PageTitle from "components/PageTitle";

const about = () => {

  return (
    <>
      <Head>
        <title>Nics - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:px-56">
        <PageTitle content="About" />
      </div>
    </>
  )
}

export default about
