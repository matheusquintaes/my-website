import * as S from './styles'
import { Link } from 'react-scroll'

const Hero = () => (
  <S.Wrapper>
    <S.HeroBg>
      <div className="container">
        <S.HeroContent>
          <S.HeroTitle>
            I design & build <span>experiences </span>for the<span> web.</span>
          </S.HeroTitle>
          <S.HeroSubTitle>
            A <b>Visual Developer</b> <b>in Auckland, New Zealand</b>. <br />I
            specialize in UI/UX Design, Responsive Web Design, and Web
            Development.
          </S.HeroSubTitle>
        </S.HeroContent>
        <S.HeroBadgeWrapper>
          <S.BadgeIcon size="56" />
          <div>
            <h4>+6</h4>
            <p>
              Years of <br />
              Experience
            </p>
          </div>
        </S.HeroBadgeWrapper>
        <S.ImageHero src="/img/hero-device.png" />
        <Link to="about" smooth={true} duration={500}>
          <S.ArrowIcon size="40" />
        </Link>
      </div>
    </S.HeroBg>
  </S.Wrapper>
)

export default Hero
