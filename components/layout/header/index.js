import Image from 'next/image'
import Link from 'next/link'

import { IMenu } from '@/interface/index'

import style from './_index.module.scss'

export default function Header({ menu }) {
  return (
    <header className={style['o-header']}>
      <div className={`o-wrapper ${style['o-header_wrapper']}`}>
        <span className={`${style['o-logo']}`}>
          <Link href="#">
            <a>
              <Avatar />
            </a>
          </Link>
        </span>
        <nav className={style['o-menu']}>
          <button className={style['o-menu_btn']}>
            <BurguerSvg />
          </button>
          <Menu menu={menu} />
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  menu: IMenu
}

function Menu({ menu = IMenu }) {
  return (
    menu && (
      <ul className={`${style['o-menu_options']}`}>
        {menu.map(({ link, text }, i) => (
          <li key={i} className={`${style['o-menu_options-item']} js-menu`}>
            <Link href={link}>
              <a className={style['o-menu_options-link']}>
                {text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    )
  )
}

Menu.propTypes = {
  menu: IMenu
}

function Avatar(props) {
  return <Image src={'/images/avatar.png'} width={64} height={78} {...props}/>
}

function BurguerSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37.32 30.32"
      {...props}
    >
      <title>menu</title>
      <g data-name="Capa 3">
        <path d="M2.66 2.16h32v4h-32zM2.66 13.16h32v4h-32zM2.66 24.16h32v4h-32z" />
      </g>
    </svg>
  )
}
