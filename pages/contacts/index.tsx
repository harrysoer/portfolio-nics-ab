import Head from "next/head";
import PageTitle from "components/PageTitle";
import ContentLayout from "components/ContentLayout";

const contacts = () => {
  return (
    <>
      <Head>
        <title>Nics - Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentLayout>
        <PageTitle content="Contact" />
      </ContentLayout>
    </>
  )
}

export default contacts
