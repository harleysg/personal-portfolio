export default function Section(props) {
  const { children, theme, id, hasWrapper = false } = props;

  const HasWrapper = ({ children }) =>
    hasWrapper ? <div className={'o-wrapper'}>{children}</div> : <>{children}</>;

  return (
    <section id={id} className={'o-section'} data-theme={theme}>
      <HasWrapper>{children}</HasWrapper>
    </section>
  );
}
