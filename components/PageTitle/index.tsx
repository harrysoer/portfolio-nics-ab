import { motion } from "framer-motion";

type Props = {
  content: string
}

const PageTitle = ({ content }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={titleVariants}
      className="capitalize leading-tight lg:text-6xl"
    >
      {content}
    </motion.div>
  )
}

export default PageTitle


const titleVariants = {
  hidden: {
    x: -15,
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