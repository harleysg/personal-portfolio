import { Children, createElement } from 'react'

interface IProps {
  children: typeof Children
  theme: string
  anchor?: string
  wrapper?: boolean
  intermedian?: string
  as?: string
  hiddenx?: boolean
  compact?: boolean
}

export default function Section({
  children,
  theme,
  anchor,
  wrapper = false,
  intermedian,
  as = 'section',
  hiddenx = false,
  compact = false
}: IProps) {
  const Wrapper = ({ children }) =>
    wrapper ? <div className="o-wrapper">{children}</div> : <>{children}</>

  const Container = ({ children, ...props }) =>
    createElement(as, props, children)

  return (
    <Container
      className="o-section"
      data-theme={theme}
      data-intermedian={intermedian}
      style={{ overflowX: hiddenx && 'hidden', minHeight: compact && 'auto' }}
    >
      {anchor && <div id={anchor} className="o-section_anchor" />}
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}
