export default function Compare({ left, right }) {
  return (
    <article className="c-compare">
      <div className="c-compare_left">{left}</div>
      <div className="c-compare_right">{right}</div>
    </article>
  )
}
