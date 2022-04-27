import styled from 'styled-components'
import { Pen } from '@styled-icons/boxicons-regular/Pen'
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background-color: var(--white);
  max-width: 544px;
  border-radius: var(--radius);
  padding: var(--spacing-large);

  ${media.lessThan('1300px')`
    max-width: initial;
    width: 80%;
    margin-bottom: var(--spacing-large);
  `}
`

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-large);
`

export const TextWrapper = styled.div`
  margin-bottom: var(--spacing-medium);
`

export const SkillListWrapper = styled.div`
  display: flex;

  ul {
    flex-wrap: wrap;
    display: flex;
  }
  li {
    list-style: none;
    font-size: 14px;
    color: var(--gray);
    margin-right: var(--spacing-medium);
    line-height: 24px;
  }
`
export const PenIcon = styled(Pen)`
  color: var(--primary-color);
  margin-right: var(--spacing-small);
`

export const CodeIcon = styled(CodeAlt)`
  color: var(--primary-color);
  margin-right: var(--spacing-small);
`
