import * as S from './style'

function Card(props) {
  const skill = props.title

  const skillContent = {
    title: '',
    description: '',
    list: []
  }

  if (skill === 'Design') {
    skillContent.title = 'Design'
    skillContent.description =
      '<b>Bringing work to life.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    skillContent.list = [
      'Design System',
      'UI/UX Design',
      'Wireframing',
      'Prototyping'
    ]
  }

  if (skill === 'Development') {
    skillContent.title = 'Development'
    skillContent.description =
      '<b>AAAA</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    skillContent.list = ['React', 'Wordpress']
  }

  return (
    <S.Wrapper>
      <S.HeadingWrapper>
        {skill === 'Desing' ? (
          <S.PenIcon size="30" />
        ) : (
          <S.CodeIcon size="30" />
        )}
        <h3>{skillContent.title}</h3>
      </S.HeadingWrapper>
      <S.TextWrapper>
        <p dangerouslySetInnerHTML={{ __html: skillContent.description }}></p>
      </S.TextWrapper>
      <S.SkillListWrapper>
        <ul>
          {skillContent.list.map((text, key) => (
            <li key={key}>{text}</li>
          ))}
        </ul>
      </S.SkillListWrapper>
    </S.Wrapper>
  )
}

export default Card
