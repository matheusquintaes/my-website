import styled from 'styled-components'

export const NavOverlayWrapper = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: var(--white);
  height: 60vh;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-140%)')};
  transition: transform 0.3s ease-in-out;
`
export const NavOverlay = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10%;
`
