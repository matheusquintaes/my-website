import * as S from './styles'

const Contact = () => (
  <S.Wrapper id="contact">
    <S.Bg>
      <S.Container>
        <S.ContentWrapper>
          <S.Title>Contact me</S.Title>
          <S.EmailWrapper>
            <S.Email href="mailto:matheus.quintaes@gmail.com">
              matheus.quintaes@gmail.com
            </S.Email>
            <S.IconCopy size="20" />
          </S.EmailWrapper>
          <S.Text>
            I like to craft solid and scalable frontend products with great user
            experiences.
          </S.Text>
          <S.IconsWrapper>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
              <S.TwitterIcon size="40" />
            </a>
            <a
              href="https://github.com/matheusquintaes"
              target="_blank"
              rel="noreferrer"
            >
              <S.GithubIcon size="40" />
            </a>
            <a
              href="https://www.linkedin.com/in/matheusquintaes/"
              target="_blank"
              rel="noreferrer"
            >
              <S.LinkedinIcon size="40" />
            </a>
            <a
              href="https://dribbble.com/matheusquintaes"
              target="_blank"
              rel="noreferrer"
            >
              <S.DribbbleIcon size="40" />
            </a>
            <a
              href="https://www.instagram.com/matheusquintaes"
              target="_blank"
              rel="noreferrer"
            >
              <S.InstagramIcon size="40" />
            </a>
          </S.IconsWrapper>
        </S.ContentWrapper>
      </S.Container>
    </S.Bg>
  </S.Wrapper>
)

export default Contact
