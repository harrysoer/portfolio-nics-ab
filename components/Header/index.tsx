import cn from 'classnames'
import { motion } from "framer-motion";
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

type Props = {
  isDarkBg: boolean
}

const Header = ({ isDarkBg }: Props) => (
  <>
    <Desktop isDarkBg={isDarkBg} />
    <Mobile isDarkBg={isDarkBg} />
  </>
)


export default Header;
