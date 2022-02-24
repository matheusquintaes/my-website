import * as S from './styles'

const Burger = ({ open, setOpen }) => {
  return (
    <S.MenuMobileWrapper open={open} onClick={() => setOpen(!open)}>
      {open ? <S.Xicon size="42" /> : <S.MenuIcon size="42" />}
    </S.MenuMobileWrapper>
  )
}

export default Burger
