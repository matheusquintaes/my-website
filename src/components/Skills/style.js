import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding-right: 3%;
  padding-left: 3%;
`
export const Bg = styled.div`
  background-color: var(--bg-primary-alt);
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  width: 100%;
  border-radius: var(--radius);

  ${media.lessThan('large')`
  padding-top: var(--section-padding-small);
  padding-bottom: var(--section-padding-small);
    border-radius:0`}
`
export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: var(--spacing-large);
`
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${media.lessThan('1300px')`
    justify-content: center;
  `}
`
