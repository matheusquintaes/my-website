import * as S from './styles'

type WorkItemProps = {
  link: string
  title: string
  tag: string
}

const WorkItem = ({ link, title, tag }: WorkItemProps) => (
  <S.WorkItem href={link} target="blank">
    <S.WorkTitle>
      {title}
      <S.Arrow size="40" />
    </S.WorkTitle>
    <S.WorkTag>{tag}</S.WorkTag>
  </S.WorkItem>
)

export default WorkItem
