import cn from 'classnames'
import Link from 'next/link';
import { motion, useCycle } from "framer-motion";
import { navs } from 'constants/links';

type Props = {
  isDarkBg: boolean
}

const Mobile = ({ isDarkBg }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const toggleNav = () => toggleOpen();

  const textColor = isDarkBg ? 'text-white' : 'text-black';
  const strokeColor = isDarkBg ? 'stroke-white' : 'stroke-black';
  const bgColor = isDarkBg ? 'bg-black' : 'bg-white';

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={cn([
        'lg:hidden',
        'h-20',
        'flex',
        'flex-row',
      ])}
    >
      <button className="ml-auto mr-8" onClick={toggleNav}>
        <svg
          className={cn([strokeColor])}
          width="23"
          height="23"
          viewBox="0 0 23 23"
        >
          <Bar
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Bar
            className={cn([strokeColor])}
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Bar
            className={cn([strokeColor])}
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </button>

      <motion.div
        variants={navListVariant}
        className={cn([
          'transition-colors',
          'duration-800',
          'ease-in-out',
          'absolute',
          'inset-0',
          'overflow-hidden',
          'flex',
          'flex-col',
          'justify-center',
          'items-center',
          'mt-20',
          bgColor,
          textColor
        ])}
      >
        {/* <motion.div className="absolute" variants={navListBgVariant} /> */}
        {navs.map(nav =>
          <motion.div
            className="my-5"
            key={nav.href}
            variants={navVariant}
            whileHover={{ scale: 1.5 }}
          >
            <Link href={nav.href}>
              <a onClick={toggleNav}>{nav.title}</a>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Mobile

/* ===/ Component /=== */
const Bar = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

/* ===/ Variants /=== */
const navListVariants = {
  closed: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.07,
      // delayChildren: 0.2
    }
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const navVariants = {
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
}
