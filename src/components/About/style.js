import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  padding-right: 3%;
  padding-left: 3%;

  ${media.lessThan('medium')`
  padding-top: var(--section-padding-medium);
  padding-bottom: var(--section-padding-medium);
  `}
`
export const Container = styled.div`
  max-width: 610px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`
export const TextWrapper = styled.div`
  margin-bottom: var(--spacing-large);
  p {
    margin-bottom: var(--spacing-medium);
  }
`

export const AvatarWrapper = styled.div`
  display: flex;
  width: 260px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-bottom: var(--spacing-large);
  img {
    margin-right: 20px;
  }

  h5 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
    color: var(--gray);
  }

  a {
    color: var(--primary-color);
  }
`
export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Link = styled.a`
  text-decoration: none;
  color: var(--primary-color);
`
