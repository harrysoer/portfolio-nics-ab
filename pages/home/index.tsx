import Head from "next/head";
import { motion } from "framer-motion";
import cn from "classnames";

type Props = {
  isDarkBg: boolean
}

const home = ({ isDarkBg }: Props) => {
  const rulerBgColor = isDarkBg ? "bg-white" : "bg-black"

  return (
    <>
      <Head>
        <title>Nics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial="hiddent"
        animate="show"
        variants={containerVariants}
        className="flex flex-col mt-auto mb-64 px-5 md:px-8 lg:px-32 lg:mb-70"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={nameVariants}
          className="self-start flex flex-wrap font-serif font-bold text-5xl leading-none md:text-7xl lg:text-8xl"
        >
          <motion.span
            initial="hidden"
            animate="show"
            className="mr-5"
            variants={firstNameVariants}
          >
            Nicole
        </motion.span>{' '}
          <motion.span
            initial="hidden"
            animate="show"
            variants={lastNameVariants}
          >
            Balaaldia
        </motion.span>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={dividerVariants}
          className={cn(["h-1", "my-2", rulerBgColor, 'bg-gray-400'])}
        />
        <motion.div
          initial="hidden"
          animate="show"
          variants={titleVariants}
          className="flex flex-wrap  text-2xl leading-tight md:text-4xl lg:text-4xl"
        >
          Architectural Designer
      </motion.div>
      </motion.div>
    </>
  )
}

export default home

/* ===/ Variants /=== */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 3
    }
  }
}

const nameVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1
    }
  }
}

const firstNameVariants = {
  hidden: {
    y: -15,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }
}

const lastNameVariants = {
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

const dividerVariants = {
  hidden: {
    width: "0%",
    opacity: 0,
  },
  show: {
    width: "35%",
    opacity: 1,
    transition: {
      duration: 1.5
    }
  },
}

const titleVariants = {
  hidden: {
    x: -15,
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