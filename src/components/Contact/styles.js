import { Copy } from '@styled-icons/boxicons-regular/Copy'
import media from 'styled-media-query'

import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Dribbble } from '@styled-icons/boxicons-logos/Dribbble'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'

import styled from 'styled-components'

export const Wrapper = styled.section`
  padding-right: 3%;
  padding-left: 3%;
  margin-bottom: 3%;
`
export const Bg = styled.div`
  background-color: var(--bg-dark);
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  width: 100%;
  border-radius: var(--radius);
  ${media.lessThan('medium')`
  padding-top: var(--section-padding-medium);
  padding-bottom: var(--section-padding-medium);
  border-radius: 0;

  `}
`
export const Container = styled.div`
  max-width: 610px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 3%;
  padding-left: 3%;
`

export const Title = styled.h2`
  color: var(--white);
  margin-bottom: var(--spacing-large);
`
export const EmailWrapper = styled.div`
  margin-bottom: var(--spacing-medium);
`
export const Email = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  margin-right: var(--spacing-small);
`
export const IconCopy = styled(Copy)`
  color: var(--primary-color);
  text-decoration: none;
`
export const Text = styled.p`
  color: var(--white);
  margin-bottom: var(--spacing-large);
`
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
`

export const TwitterIcon = styled(Twitter)`
  color: var(--white);
`
export const GithubIcon = styled(Github)`
  color: var(--white);
`
export const LinkedinIcon = styled(Linkedin)`
  color: var(--white);
`
export const DribbbleIcon = styled(Dribbble)`
  color: var(--white);
`
export const InstagramIcon = styled(Instagram)`
  color: var(--white);
`
