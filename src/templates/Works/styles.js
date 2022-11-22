import styled from 'styled-components'
import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal'
export const Content = styled.section`
  text-align: center;

  margin: var(--section-padding-medium) auto;
`

export const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: var(--spacing-extra-large);
`
export const IntroText = styled.div`
  margin-bottom: var(--spacing-medium);
`
export const Url = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  margin-bottom: var(--spacing-large);
`
export const Body = styled.div`
  margin-top: var(--spacing-large);

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
export const LinkExternalIcon = styled(LinkExternal)`
  color: var(--primary-color);
  width: 20px;
  height: 20px;
`
