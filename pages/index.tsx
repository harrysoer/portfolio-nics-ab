import Head from "next/head";
import styled from 'styled-components';
import { motion } from "framer-motion";
import LinkedInLightIco from 'assets/icons/linkedin-light.svg';
import MailLightIco from 'assets/icons/mail-light.svg';
import InstagramLightIco from 'assets/icons/instagram-light.svg';

const Soon = () => {
  const variants = {
    hidden: {
      y: 10,
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeIn", duration: 1 },
    },
  };

  const links = [
    {
      href: "https://www.linkedin.com/in/nicole-balaaldia-937254168/?originalSubdomain=ph",
      icon: LinkedInLightIco
    },
    {
      href: "mailto:balaaldianicole@gmail.com",
      icon: MailLightIco
    },
    {
      href: "https://www.instagram.com/nicnicsss/",
      icon: InstagramLightIco
    },
  ]

  return (
    <div className="h-screen bg-black flex flex-col	justify-center items-center">
      <Head>
        <title>Nicole Balaaldia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="w-screen text-white text-center text-3xl lg:text-6xl tracking-wider antialiased"
      >
        ON-GOING CONSTRUCTION
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="w-screen mt-2 flex flex-row justify-evenly md:justify-center lg:text-6xl"
      >
        {links.map(link =>
          <a
            className="mx-6"
            target="__blank"
            href={link.href}
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              className="h-auto w-8 md:w-12"
              src={link.icon}
            />
          </a>
        )}
      </motion.div>
    </div>
  );
}

export default Soon;
