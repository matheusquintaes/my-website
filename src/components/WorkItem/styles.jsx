import styled from 'styled-components'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'
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
`

export const WorkTag = styled.div`
  font-size: 14px;
`

export const Arrow = styled(RightArrowAlt)`
  color: var(--primary-color);
`
