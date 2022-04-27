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
      'I value simple content structure, <b>clean design patterns</b>, and thoughtful interactions.      '
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
      'I like to code things from <b>scratch</b> , and enjoy bringing ideas to life in the browser.'
    skillContent.list = [
      'HTML',
      'CSS',
      'Sass',
      'Javascript',
      'React',
      'PHP',
      'Wordpress'
    ]
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
