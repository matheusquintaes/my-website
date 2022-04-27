import * as S from './styles'
import { Link } from 'react-scroll'

const Menu = () => (
  <S.MenuWrapper>
    <ul>
      <li>
        <Link to="about" smooth={true} duration={500}>
          about
        </Link>
      </li>
      <li>
        <Link to="works" smooth={true} duration={500}>
          works
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500}>
          contact
        </Link>
      </li>
    </ul>
  </S.MenuWrapper>
)

export default Menu
