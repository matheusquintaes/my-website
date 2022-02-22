import * as S from './style'

import Card from '../Card'

const Skills = () => (
  <>
    <S.Wrapper>
      <S.Bg>
        <div className="container">
          <S.HeadingWrapper>
            <h4 className="subheading">MY SKILLS</h4>
            <h2 className="subtitle">My Expertise</h2>
          </S.HeadingWrapper>
          <S.CardWrapper>
            <Card title="Design" />
            <Card title="Development" />
          </S.CardWrapper>
        </div>
      </S.Bg>
    </S.Wrapper>
  </>
)

export default Skills
