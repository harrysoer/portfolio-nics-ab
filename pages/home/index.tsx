import { motion } from "framer-motion";

const home = () => {
  return (
    <motion.div initial="hiddent" animate="show" variants={containerVariants} className="mt-64 mb-10 px-5 md:px-8 lg:px-32">
      <motion.div
        initial="hidden"
        animate="show"
        variants={nameVariants}
        className="flex flex-wrap font-serif text-5xl leading-none md:text-7xl lg:text-8xl"
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
        variants={titleVariants}
        className="flex flex-wrap mt-2 text-2xl leading-tight md:text-4xl lg:text-4xl"
      >
        Architectural Designer
      </motion.div>
    </motion.div>
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