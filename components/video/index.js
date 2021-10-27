export default function Video ({ poster, sources = [] }) {
  return (
    <div className='c-video_wrapper'>
      <video poster={poster} controls>
        {
          sources && sources.map(source => (
            <source key={source} src={source.src} type={source.type} />
          ))
        }
      </video>
    </div>
  )
}
