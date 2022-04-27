import styled from 'styled-components'
import media from 'styled-media-query'

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

export const FeaturedWorkItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${media.lessThan('medium')`
    flex-wrap: wrap;
  `}
`

export const MoreWorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const MoreWorks = styled.section`
  padding-top: var(--section-padding);

  ${media.lessThan('medium')`
    padding-top: 0;
  `}
`
