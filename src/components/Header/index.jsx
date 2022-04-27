import Menu from '../Menu/'
import MenuMobile from '../MenuMobile/'

import * as S from './styles'

const Header = function () {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.LogoWrapper href="/">
          <S.ImageLogo src="/img/memoji.png" />
          <S.TextLogo>
            <span>matheus</span>quintaes
          </S.TextLogo>
        </S.LogoWrapper>
        <Menu />
        <MenuMobile />
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export default Header
