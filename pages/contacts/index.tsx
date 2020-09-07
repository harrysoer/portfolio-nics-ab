import { GetStaticProps } from "next";
import Head from "next/head";

import PageTitle from "components/PageTitle";
import ContentLayout from "components/ContentLayout";
import graphcms from "graphql/graphCmsClient";
import { motion } from "framer-motion";

type ContactType = { type: string, content: string }
type Props = {
  contacts: ContactType[]
}

const Contacts = ({ contacts }: Props) => {
  const renderContacts = (contactInfo: ContactType) => {
    let contact = { icon: '', display: <></> }

    switch (contactInfo.type) {
      case "MOBILE_NUMBER":
        contact.icon = '/icons/phone-dark.svg'
        contact.display = (<>{contactInfo.content}</>)
        break;

      case "EMAIL":
        contact.icon = '/icons/mail-dark.svg'
        contact.display = (
          <a href={`mailto:${contactInfo.content}`} target="__blank">
            {contactInfo.content}
          </a>)
        break;

      case "LINKED_IN":
        contact.icon = '/icons/linkedin-dark.svg'
        contact.display = (
          <a href={contactInfo.content} target="__blank">
            {contactInfo.content}
          </a>
        )
        break;


      case "INSTAGRAM":
        const igContent = contactInfo.content.split('/')[3]
        contact.icon = '/icons/instagram-dark.svg'
        contact.display = (
          <a href={contactInfo.content} target="__blank">
            {igContent}
          </a>
        )
        break;

      default:
        return null
    }

    return (
      <motion.div
        key={contactInfo.content}
        initial="hidden"
        animate="show"
        variants={contactVariants}
        className="mb-4 font-serif flex items-center"
      >
        <img className="h-auto w-auto md:w-8 md:h-8 mr-6" src={contact.icon} />
        <span className="md:text-lg">{contact.display}</span>
      </motion.div>
    )
  }

  return (
    <>
      <Head>
        <title>Nics - Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentLayout>
        <PageTitle content="Contact" />
        <div className="mt-10 ml-8 lg:ml-32">
          {
            contacts.map(renderContacts)
          }
        </div>
      </ContentLayout>
    </>
  )
}

export default Contacts

export const getStaticProps: GetStaticProps = async () => {
  const { contacts = [] } = await graphcms.request(`
    {
      contacts{
       type
       content
      }
    }
  `)

  return { props: { contacts } }
}

/* ===/ Variants /=== */
const contactVariants = {
  hidden: {
    x: 15,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }
}