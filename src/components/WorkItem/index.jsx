import * as S from './styles'

const WorkItem = ({ link, title, tag, icon }) => (
  <S.WorkItem href={link} target="_blank">
    <S.WorkTitle>
      {title}
      <S.Arrow size="28" />
    </S.WorkTitle>
    <S.WorkTag>
      {
        {
          shopify: <S.ShopifyIcon size="18" />,
          figma: <S.FigmaIcon size="18" />,
          wordpress: <S.WordpressIcon size="18" />,
          woo: <S.WooIcon size="24" />
        }[icon]
      }

      {tag}
    </S.WorkTag>
  </S.WorkItem>
)

export default WorkItem
