import styled from 'styled-components'
import { BadgeCheck } from '@styled-icons/boxicons-regular/BadgeCheck'
import { DownArrowAlt } from '@styled-icons/boxicons-regular/DownArrowAlt'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding-right: 3%;
  padding-left: 3%;
`
export const HeroBg = styled.div`
  background-color: var(--bg-primary-alt);
  min-height: 640px;
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-radius: var(--radius);

  ${media.lessThan('large')`
    min-height: initial;
    border-radius: 0;
  `}
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 544px;

  ${media.lessThan('large')`
  padding-top: var(--section-padding-small);
  padding-bottom: var(--section-padding-small);
  padding-right: 3%;
    padding-left: 3%;
  `}
`
export const HeroTitle = styled.h1`
  font-size: 76px;
  font-weight: 800;
  margin-bottom: var(--spacing-large);
  letter-spacing: -0.04em;
  color: var(--text-color);

  ${media.lessThan('medium')`
    font-size: 62px;
  `}

  ${media.lessThan('small')`
    font-size: 42px;
  `}

  span {
    color: var(--primary-color);
  }
`
export const HeroSubTitle = styled.p`
  line-height: 34px;
`
export const HeroBadgeWrapper = styled.div`
  background-color: var(--white);
  position: absolute;
  display: flex;
  padding: 18px 28px;
  align-items: center;
  border-radius: 30px;
  animation: bounce 2s ease-in infinite;
  transform-style: preserve-3d;
  will-change: transform;
  right: 4%;
  bottom: 2%;
  z-index: 2;

  ${media.lessThan('large')`
    display:none;
  `}

  h4 {
    font-size: 32px;
  }
  p {
    font-size: 16px;
    line-height: 22px;
  }

  @keyframes bounce {
    50% {
      transform: translateY(-14px);
    }
  }
`
export const BadgeIcon = styled(BadgeCheck)`
  color: var(--primary-color);
  margin-right: var(--spacing-medium);
  z-index: 1;
`
export const ImageHero = styled.img`
  position: absolute;
  left: auto;
  top: auto;
  right: 4%;
  bottom: 4%;

  ${media.lessThan('large')`
  display: none;
`}
`

export const ArrowIcon = styled(DownArrowAlt)`
  color: var(--primary-color);
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 2%;

  ${media.lessThan('medium')`
  display: none;

    `}
`
