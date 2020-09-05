import cn from 'classnames'
import Link from 'next/link';
import { motion } from "framer-motion";
import { navs } from 'constants/links';

type Props = {
  isDarkBg: boolean
}

const Desktop = ({ isDarkBg }: Props) => {
  const textColor = isDarkBg ? 'text-white' : 'text-black';

  return (
    <motion.div
      className={cn([
        'hidden',
        'lg:flex',
        'px-24',
        'h-32',
        'justify-end',
        'items-center',
        textColor
      ])}
      variants={variantLgContainer}
      initial="hidden"
      animate="show"
    >
      {
        navs.map(nav =>
          <motion.div
            key={nav.href}
            className='cursor-pointer even:mx-10 lg:even:mx-20 text-lg'
            variants={variantLgNavs}
            whileHover={{ scale: 1.2 }}
          >
            <Link href={nav.href}>
              <a>{nav.title}</a>
            </Link>
          </motion.div>
        )
      }
    </motion.div>
  )
}

export default Desktop

/* ===/ Variants /=== */
const variantLgContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.45
    }
  }
}

const variantLgNavs = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
}
