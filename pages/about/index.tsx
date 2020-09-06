import Head from "next/head";
import PageTitle from "components/PageTitle";
import ContentLayout from "components/ContentLayout";

const about = () => {

  return (
    <>
      <Head>
        <title>Nics - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentLayout>
        <PageTitle content="About" />
      </ContentLayout>
    </>
  )
}

export default about
