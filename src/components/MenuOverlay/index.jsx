import * as S from './styles'

const MenuOverlay = ({ setOpen, open }) => {
  return (
    <>
      <S.NavOverlayWrapper open={open}>
        <S.NavOverlay>
          <a onClick={() => setOpen(false)} href="/#about">
            about
          </a>

          <a href="works" onClick={() => setOpen(false)}>
            works
          </a>
          <a onClick={() => setOpen(false)} href="contact">
            contact
          </a>
        </S.NavOverlay>
      </S.NavOverlayWrapper>
    </>
  )
}

export default MenuOverlay
