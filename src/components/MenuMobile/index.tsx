import { useEffect, useState, useRef } from 'react'

import Burger from '../Burger'
import MenuOverlay from '../MenuOverlay'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
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
  const [open, setOpen] = useState<boolean>(false)
  const node = useRef()

  useOnClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <MenuOverlay open={open} />
    </div>
  )
}

export default MenuMobile
