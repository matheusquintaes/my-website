import styled from 'styled-components'

export const Wrapper = styled.header`
  position: relative;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
`
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ImageLogo = styled.img``

export const TextLogo = styled.div`
  font-weight: 700;
  span {
    color: var(--primary-color);
  }
`
