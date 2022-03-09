import { createElement } from 'react'

export default function Section (props) {
  const {
    children,
    theme,
    anchor,
    wrapper = false,
    intermedian,
    as = 'section'
  } = props

  const Wrapper = ({ children }) =>
    wrapper ? <div className='o-wrapper'>{children}</div> : <>{children}</>;

  const Container = ({ children, ...props }) => createElement(as, props, children);

  return (
    <Container
      className='o-section'
      data-theme={theme}
      data-intermedian={intermedian}
      {...props}
    >
      {anchor && <div id={anchor} className='o-section_anchor' />}
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}
