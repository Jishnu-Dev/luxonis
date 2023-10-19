import { ReactNode } from 'react'

interface PropTypes {
  when?: boolean
  children: ReactNode
}

export default function Render({ when = false, children }: PropTypes) {
  return when ? <>{children}</> : null
}
