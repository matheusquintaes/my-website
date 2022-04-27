import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;

  margin: var(--section-padding-medium) auto;
`

export const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: var(--spacing-extra-large);
`

export const Body = styled.div`
  img {
    margin-bottom: var(--spacing-extra-large);
    width: 100%;
  }
`
export const LinkHome = styled.a`
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`
