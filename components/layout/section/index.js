export default function Section (props) {
  const { children, theme, anchor, wrapper = false, intermedian } = props

  const HasWrapper = ({ children }) => (
    wrapper
      ? <div className='o-wrapper'>{children}</div>
      : <>{children}</>
  )

  return (
    <section
      className='o-section'
      data-theme={theme}
      data-intermedian={intermedian}
      {...props}
    >
      <div id={anchor} className='o-section_anchor' />
      <HasWrapper>{children}</HasWrapper>
    </section>
  )
}
