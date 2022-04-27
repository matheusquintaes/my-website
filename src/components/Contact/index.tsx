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
            <S.TwitterIcon size="40" />
            <S.GithubIcon size="40" />
            <S.LinkedinIcon size="40" />
            <S.DribbbleIcon size="40" />
            <S.InstagramIcon size="40" />
          </S.IconsWrapper>
        </S.ContentWrapper>
      </S.Container>
    </S.Bg>
  </S.Wrapper>
)

export default Contact
