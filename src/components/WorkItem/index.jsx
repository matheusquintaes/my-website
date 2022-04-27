import * as S from './styles'

const WorkItem = ({ link, title, tag }) => (
  <S.WorkItem href={link} target="blank">
    <S.WorkTitle>
      {title}
      <S.Arrow size="40" />
    </S.WorkTitle>
    <S.WorkTag>{tag}</S.WorkTag>
  </S.WorkItem>
)

export default WorkItem
