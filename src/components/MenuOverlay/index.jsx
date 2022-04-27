import * as S from './styles'
import { Link } from 'react-scroll'

const MenuOverlay = ({ setOpen, open }) => {
  return (
    <>
      <S.NavOverlayWrapper open={open}>
        <S.NavOverlay>
          <Link
            onClick={() => setOpen(false)}
            to="about"
            smooth={true}
            duration={500}
          >
            about
          </Link>

          <Link
            to="works"
            onClick={() => setOpen(false)}
            smooth={true}
            duration={500}
          >
            works
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="contact"
            smooth={true}
            duration={500}
          >
            contact
          </Link>
        </S.NavOverlay>
      </S.NavOverlayWrapper>
    </>
  )
}

export default MenuOverlay
