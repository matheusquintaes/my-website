import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuMobileWrapper = styled.div`
  display: none;

  ${media.lessThan('medium')`
  display: block;
`}
`
