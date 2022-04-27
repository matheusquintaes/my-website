import * as S from './styles'

type FeaturedWorkProps = {
  link: string
  title: string
  description: string
}

const FeaturedWork = ({ link, title, description }: FeaturedWorkProps) => (
  <S.FeaturedWorkLink href={`/works/${link}`}>
    <S.FeaturedWorkWrapper bg={link}>
      <S.FeaturedWorkTitle>{title}</S.FeaturedWorkTitle>
      <S.FeaturedWorkDescription>{description}</S.FeaturedWorkDescription>
    </S.FeaturedWorkWrapper>
  </S.FeaturedWorkLink>
)

export default FeaturedWork
