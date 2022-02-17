import Nav from 'components/Nav/'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.HeaderContainer>
      <S.LogoWrapper>
        <S.ImageLogo src="/img/memoji.png" />
        <S.TextLogo>
          <span>matheus</span>quintaes
        </S.TextLogo>
      </S.LogoWrapper>
      <Nav />
    </S.HeaderContainer>
  </S.Wrapper>
)

export default Header
