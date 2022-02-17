import styled from 'styled-components'

export const MenuWrapper = styled.div`
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
