import style from './headding.module.scss'
import types from 'prop-types'
import { IHeading } from "@/interface/index"

export default function Headding({ main = false, text = IHeading }) {
  const { indicator, enfasis, content, space } = text
  const TagName = (props) => main ? <h1 {...props}>{ props.children }</h1> : <h2 {...props}>{ props.children }</h2>

  return (
    (text.indicator || text.content || text.enfasis) ?
      <TagName className={style['c-section_headding']}>
        {indicator && <HeaddingIndicator text={indicator} />}
        {(enfasis || content) && (
          <div className={style['c-section_headding-content']}>
            {enfasis && <HeaddingEnfasis text={enfasis} />}
            {space && <> </>}
            {content && <>{content}</>}
          </div>
        )}
      </TagName>
    : <></>
  );
}

Headding.propTypes = {
  text: types.shape({
    [IHeading.indicator]: types.string,
    [IHeading.enfasis]: types.string,
    [IHeading.content]: types.string
  })
};

function HeaddingIndicator({ text }) {
  return (
    <small className={style['c-section_headding-indicator']}>{text}</small>
  );
}

function HeaddingEnfasis({ text }) {
  return <span className={style['c-section_headding-enfasis']}>{text}</span>;
}
