import Head from "next/head";
import { motion } from "framer-motion";
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
        <motion.div
          initial="hidden"
          animate="show"
          variants={contentVariants}
          className="mt-4 text-3xl lg:mt-10 lg:ml-10 lg:max-w-lg"
        >
          (Currently updating)
        </motion.div>
      </ContentLayout>
    </>
  )
}

export default works

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