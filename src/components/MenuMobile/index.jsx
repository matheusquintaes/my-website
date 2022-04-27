import { useEffect, useState, useRef } from 'react'

import * as S from './styles'

import Burger from '../Burger'
import MenuOverlay from '../MenuOverlay'

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

const MenuMobile = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useOnClickOutside(node, () => setOpen(false))

  return (
    <S.MenuMobileWrapper ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <MenuOverlay setOpen={setOpen} open={open} />
    </S.MenuMobileWrapper>
  )
}

export default MenuMobile
