import styled from 'styled-components'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { X } from '@styled-icons/boxicons-regular/X'
import media from 'styled-media-query'

export const MenuMobileWrapper = styled.div`
  display: none;

  ${media.lessThan('medium')`
    display: block;
  `}
`
export const MenuIcon = styled(Menu)`
  color: var(--gray);
`
export const Xicon = styled(X)`
  color: var(--gray);
`
