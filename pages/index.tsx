import Head from "next/head";
import { motion } from "framer-motion";

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
      icon: '/icons/linkedin-light.svg'
    },
    {
      href: "mailto:balaaldianicole@gmail.com",
      icon: '/icons/mail-light.svg'
    },
    {
      href: "https://www.instagram.com/nics_ab/",
      icon: '/icons/instagram-light.svg'
    },
  ]

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Nicole Balaaldia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="w-screen text-white text-center text-3xl md:text-5xl lg:text-6xl tracking-wider antialiased"
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
            key={link.href}
            className="mx-6"
            target="__blank"
            href={link.href}
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              className="h-auto w-8 lg:w-12"
              src={link.icon}
            />
          </a>
        )}
      </motion.div>
    </div>
  );
}

export default Soon;
