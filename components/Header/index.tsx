import Link from 'next/link';
import styled from 'styled-components';
import { motion } from "framer-motion";


type Props = {
  isDarkBg: boolean
}

const Header = ({ isDarkBg }: Props) => {
  const textColor = isDarkBg ? 'text-white' : 'text-dark';

  const links = [
    { title: 'About', href: '/about' },
    { title: 'Works', href: '/works' },
    { title: 'Contact', href: '/contacts' },
  ]

  return (
    <motion.div
      className={`${textColor} px-24 h-32 flex justify-end items-center`}
      variants={variantContainer}
      initial="hidden"
      animate="show"
    >
      {
        links.map(link =>
          <motion.div
            key={link.href}
            className='lg:even:mx-20 text-lg'
            variants={variantNavs}
            whileHover={{ scale: 1.2 }}
          // transition={{ ease: 'easeInOut', duration: 0.2 }}
          >
            <Link href={link.href}>
              <a>
                {link.title}
              </a>
            </Link>
          </motion.div>
        )
      }
    </motion.div>
  )
}

export default Header

/* ===/ STYLES /=== */
const variantContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7
    }
  }
}

const variantNavs = {
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