import Link from 'next/link';
import styled from 'styled-components';

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
    <div className={`${textColor} px-10 h-24 flex justify-end items-center`}>
      {
        links.map(link =>
          <div key={link.href} className='even:mx-10 text-lg'>
            <Link href={link.href}>
              <a>
                {link.title}
              </a>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Header

/* ===/ STYLES /=== */
const Container = styled.div`

`