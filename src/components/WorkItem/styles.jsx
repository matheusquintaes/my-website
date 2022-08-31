import styled from 'styled-components'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'
import { Shopify } from '@styled-icons/fa-brands/Shopify'
import { Figma } from '@styled-icons/fa-brands/Figma'
import { Wordpress } from '@styled-icons/fa-brands/Wordpress'
import { Woo } from '@styled-icons/simple-icons/Woo'
import media from 'styled-media-query'

export const WorkItem = styled.a`
  border-bottom: 1px solid var(--gray);
  flex-basis: calc(50% - 4rem);
  padding: var(--spacing-medium) 0;
  color: var(--black);
  text-decoration: none;

  ${media.lessThan('medium')`
    flex-basis: 100%;
  `}
`

export const WorkTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: var(--spacing-small);
`

export const WorkTag = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: var(--spacing-small);

  svg {
    margin-right: var(--spacing-small);
  }
`

export const Arrow = styled(RightArrowAlt)`
  color: var(--primary-color);
`

export const ShopifyIcon = styled(Shopify)`
  color: var(--gray);
`
export const FigmaIcon = styled(Figma)`
  color: var(--gray);
`
export const WordpressIcon = styled(Wordpress)`
  color: var(--gray);
`
export const WooIcon = styled(Woo)`
  color: var(--gray);
`
