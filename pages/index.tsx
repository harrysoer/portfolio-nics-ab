import Head from "next/head";
import { motion } from "framer-motion";
// import styles from "../styles/Home.module.css";

export default function Home() {
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

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <Head>
        <title>Nicole Balaaldia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="text-white text-center text-3xl lg:text-6xl tracking-wider antialiased"
      >
        ON-GOING CONSTRUCTION
      </motion.div>
    </div>
  );
}
