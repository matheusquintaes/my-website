import * as S from './styles'

const FeaturedWork = ({ link, title, description }) => (
  <S.FeaturedWorkLink href={`/works/${link}`}>
    <S.FeaturedWorkWrapper bg={link}>
      <S.FeaturedWorkTitle>{title}</S.FeaturedWorkTitle>
      <S.FeaturedWorkDescription>{description}</S.FeaturedWorkDescription>
    </S.FeaturedWorkWrapper>
  </S.FeaturedWorkLink>
)

export default FeaturedWork
