import style from './headding.module.scss';
import types from "prop-types"

const Itext = {
  indicator: '',
  enfasis: '',
  content: ''
}

export default function Headding({ text = Itext }) {
  return (
    <h1 className={style['c-section_headding']}>
      <small className={style['c-section_headding-indicator']}>
        {text?.indicator}
      </small>
      {(text?.enfasis || text?.content) && (
        <div className={style['c-section_headding-content']}>
          {text?.enfasis && (
            <span className={style['c-section_headding-enfasis']}>
              {text.enfasis}
            </span>
          )}
          {text?.content && <> {text?.content}</>}
        </div>
      )}
    </h1>
  );
}

Headding.propTypes = {
  text: types.shape({
    [Itext.indicator]: types.string,
    [Itext.enfasis]: types.string,
    [Itext.content]: types.string
  })
}
