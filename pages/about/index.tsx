import { GetStaticProps } from "next";

import ReactMarkdown from 'react-markdown';
import Head from "next/head";
import PageTitle from "components/PageTitle";
import ContentLayout from "components/ContentLayout";
import graphcms from "graphql/graphCmsClient";


const About = ({ about }) => {
  const { content = '' } = about

  return (
    <>
      <Head>
        <title>Nics - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentLayout>
        <PageTitle content="About" />
        <ReactMarkdown source={content} escapeHtml={false}/>
      </ContentLayout>
    </>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  const { about = {} } = await graphcms.request(`
    {
      about(where: {id: "ckeqoslc014zd0130s3u5dddc"}) {
       content
      }
    }
  `)

  return { props: { about } }
}

