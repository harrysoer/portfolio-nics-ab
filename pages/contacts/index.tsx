import Head from "next/head";
import PageTitle from "components/PageTitle";

const contacts = () => {
  return (
    <>
      <Head>
        <title>Nics - Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageTitle content="Contacts" />
      </div>
    </>
  )
}

export default contacts
