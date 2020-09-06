import Head from "next/head";
import PageTitle from "components/PageTitle";
import ContentLayout from "components/ContentLayout";

const works = () => {
  return (
    <>
      <Head>
        <title>Nics - Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentLayout>
        <PageTitle content="Works" />
      </ContentLayout>
    </>
  )
}

export default works
