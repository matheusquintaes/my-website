import styled, { keyframes } from 'styled-components'

const services = keyframes`
	0% { transform: translateX(0%); }
	100% { transform: translateX(-100%);}
`

export const Container = styled.div`
  max-width: 120.1rem;
  margin-right: auto;
  margin-left: auto;
`
export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100rem;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
`

export const Gradient = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  background-image: linear-gradient(
    90deg,
    #fff,
    hsla(0, 0%, 100%, 0) 20%,
    #fff
  );
`

export const Items = styled.div`
  animation: ${services} 24s linear infinite;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Item = styled.div`
  display: inline-block;
  margin-right: 4rem;
  color: #c5cee2;
  font-size: 28px;
  line-height: 125%;
`
