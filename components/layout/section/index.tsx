import { createElement, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  theme: string
  anchor?: string
  wrapper?: boolean
  intermedian?: string
  as?: string
  hiddenx?: boolean
  compact?: boolean
}

export default function Section(props: IProps) {
  const {
    children,
    theme,
    anchor,
    wrapper = false,
    intermedian,
    as = 'section',
    hiddenx = false,
    compact = false
  } = props

  const Wrapper = ({ children }) =>
    wrapper ? <div className="o-wrapper">{children}</div> : <>{children}</>

  const Container = ({ children, ...props }) =>
    createElement(as, props, children)

  const style = {
    overflowX: hiddenx ? 'hidden' : null,
    minHeight: compact ? 'auto' : null
  }

  return (
    <Container
      className="o-section"
      data-theme={theme}
      data-intermedian={intermedian}
      style={style}
    >
      {anchor && <div id={anchor} className="o-section_anchor" />}
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}
