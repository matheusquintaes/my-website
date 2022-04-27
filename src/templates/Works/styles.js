import styled from 'styled-components'
import Link from 'next/link'

export const Content = styled.section`
  text-align: center;

  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  img {
    margin-bottom: var(--spacing-extra-large);
    width: 100%;
  }
`
export const LinkHome = styled(Link)``
