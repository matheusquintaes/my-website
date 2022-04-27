import * as S from './styles'

const MenuOverlay = ({ setOpen, open }) => {
  return (
    <>
      <S.NavOverlayWrapper open={open}>
        <S.NavOverlay>
          <a href="/#about" onClick={() => setOpen(false)}>
            about
          </a>

          <a href="/#works" onClick={() => setOpen(false)}>
            works
          </a>
          <a href="/#contact" onClick={() => setOpen(false)}>
            contact
          </a>
        </S.NavOverlay>
      </S.NavOverlayWrapper>
    </>
  )
}

export default MenuOverlay
