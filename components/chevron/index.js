import style from './chevron.module.scss'

export default function Chevron() {
  return (
    <div className={style['u-chevron']}>
      <div className={style['u-chevron-arrow']} />
      <div className={style['u-chevron-arrow']} />
      <div className={style['u-chevron-arrow']} />
    </div>
  )
}
