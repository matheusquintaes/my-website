import styled from 'styled-components'

export const Wrapper = styled.header`
  position: relative;
  padding-right: 3%;
  padding-left: 3%;
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
export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--black);
`

export const ImageLogo = styled.img`
  width: 80px;
`

export const TextLogo = styled.div`
  font-weight: 700;
  span {
    color: var(--primary-color);
  }
`
