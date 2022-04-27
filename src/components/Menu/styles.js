import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.div`
  ${media.lessThan('medium')`
  display: none;
`}
  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    list-style-type: none;
    margin-right: var(--spacing-large);
  }

  a {
    font-size: 18px;
    color: var(--gray);
  }
`
