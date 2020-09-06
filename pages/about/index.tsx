import { GetStaticProps } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

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
      <ContentLayout className="flex flex-wrap lg:justify-around">
        <div>
          <PageTitle content="About" />
          <motion.div
            initial="hidden"
            animate="show"
            variants={contentVariants}
            className="mt-5 font-serif lg:mt-10 lg:ml-10 lg:max-w-lg"
          >
            <ReactMarkdown source={content} escapeHtml={false} />
          </motion.div>
        </div>
        <motion.img
          src="/profile-img.jpg"
          initial="hidden"
          animate="show"
          variants={imgVariants}
          className="w-64 h-auto self-center mx-auto my-16 lg:mx-0"
        />
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

const contentVariants = {
  hidden: {
    y: 15,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const imgVariants = {
  hidden: {
    x: 15,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}
