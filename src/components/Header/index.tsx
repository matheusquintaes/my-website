import Menu from 'components/Menu/'
import MenuMobile from 'components/MenuMobile/'

import * as S from './styles'

const Header = function () {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.LogoWrapper>
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
