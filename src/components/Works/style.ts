import styled from 'styled-components'
import media from 'styled-media-query'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'

export const Wrapper = styled.section`
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  padding-right: 3%;
  padding-left: 3%;

  ${media.lessThan('medium')`
  padding-top: var(--section-padding-medium);
  padding-bottom: var(--section-padding-medium);
  `}
`
export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-right: auto;
  margin-left: auto;
`

export const FeaturedWorkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const FeaturedWork = styled.div`
  width: 302px;
  height: 400px;
  padding: var(--spacing-large);
  color: var(--white);
  background-image: url('/img/blisset.jpg');
  border-radius: var(--radius);
`
export const FeaturedWorkTitle = styled.h4`
  font-size: 20px;
`
export const FeaturedWorkDescription = styled.p`
  font-size: 16px;
  color: var(--white);
`

export const FeaturedWorkTags = styled.div`
  display: flex;
`

export const MoreWorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const WorkItem = styled.a`
  border-bottom: 1px solid var(--gray);
  flex-basis: calc(50% - 4rem);
  padding: var(--spacing-medium) 0;
  color: var(--black);
  text-decoration: none;
`

export const WorkTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const WorkTag = styled.div`
  font-size: 14px;
`

export const Arrow = styled(RightArrowAlt)`
  color: var(--primary-color);
`
export const MoreWorks = styled.section`
  padding-top: var(--section-padding);
`
