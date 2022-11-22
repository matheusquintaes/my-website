import styled from 'styled-components'
import Link from 'next/link'
import media from 'styled-media-query'

export const FeaturedWorkLink = styled(Link)``

export const FeaturedWorkWrapper = styled.div`
  width: 302px;
  height: 400px;
  padding: var(--spacing-large);
  color: var(--white);
  background: ${(props) => `url(img/works/${props.bg}/thumb.jpg)`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--radius);
  transition: transform 0.5s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: end;

  &:hover {
    transform: translateY(-10px);
    &::after {
      opacity: 0.8;
    }
  }

  ${media.lessThan('medium')`
    width: 100%;
    margin-bottom: var(--spacing-large);
    height: 280px;
  `}
`
export const FeaturedWorkTitle = styled.h4`
  font-size: 20px;
`
export const FeaturedWorkDescription = styled.p`
  font-size: 16px;
  color: var(--white);
`

export const FeaturedWorkTags = styled.div`
  display: flex;
`
