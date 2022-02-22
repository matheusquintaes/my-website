import * as S from './style'

const About = () => (
  <S.Wrapper>
    <S.Container>
      <h4 className="subheading">WHO IS MATT QUINTAES</h4>
      <h2 className="subtitle">A bit about me</h2>
      <S.TextWrapper>
        <p>
          Front-end UX/UI developer with 6 years experience in web developing
          focusing in usability, semantics, accessibility and clean code.
        </p>
        <p>
          Since I&apos;m a non-stop learner, I&apos;m always looking for
          development of new technologies, industry trends and standardization.
        </p>
      </S.TextWrapper>

      <S.AvatarWrapper>
        <img src="/img/matt.jpg" alt="" />
        <S.AvatarInfo>
          <h5>Matt Quintaes</h5>
          <p>Front-end / UI/UX Design</p>
        </S.AvatarInfo>
      </S.AvatarWrapper>
      <S.Link href="www.google.com.br">Download my CV.</S.Link>
    </S.Container>
  </S.Wrapper>
)

export default About
