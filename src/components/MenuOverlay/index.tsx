import * as S from './styles'

const MenuOverlay = ({ open }) => {
  return (
    <>
      <S.NavOverlayWrapper open={open}>
        <S.NavOverlay>
          <a>about</a>

          <a>projects</a>

          <a>contact</a>
        </S.NavOverlay>
      </S.NavOverlayWrapper>
    </>
  )
}

export default MenuOverlay
