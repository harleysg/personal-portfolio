import { useRef, useEffect, useState, ReactNode, forwardRef, MouseEvent } from 'react'
import { createPortal } from 'react-dom'

import css from './portal.module.scss'

interface PortalProps {
  children: ReactNode,
  mounted: boolean,
  previousFocus?: string|HTMLElement,
  ref?: string
  callback?: (status: any) => void
}

export default forwardRef(
  function Portal(props: PortalProps, ref) {
    const selfRef = useRef<Element | null>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [mounted, setMounted] = useState(!!props.mounted)

    function isPortalMounted(status: boolean = true) {
      const body = document.querySelector<HTMLElement>('body')
      const _status = status ? 'hidden' : 'auto'

      body.style.overflow = _status

      if (status) {
        buttonRef.current?.focus()
      } else {
        if ((props?.previousFocus as HTMLElement)?.nodeName) {
          console.log({
            prevFocus: props.previousFocus
          })
          ;(props?.previousFocus as HTMLElement).focus()
        }
      }
    }

    function unMountPortal(event: MouseEvent) {
      if ((event.target as HTMLElement).dataset.portalClose) {
        isPortalMounted(false)
        setMounted(false)
        if (props.callback) props.callback({ status: false })
      }
    }

    useEffect(() => {
      if (props.mounted) {
        setMounted(props.mounted)
        isPortalMounted(props.mounted)
        setTimeout(() => {
          dialogRef.current?.setAttribute('animate-fade-in', 'true')
          dialogRef.current?.removeAttribute('animate-fade-out')
        }, 210)
      } else {
        dialogRef.current?.setAttribute('animate-fade-out', 'true')
        dialogRef.current?.removeAttribute('animate-fade-in')
        setTimeout(() => {
          setMounted(props.mounted)
          isPortalMounted(props.mounted)
        }, 810)
      }
    }, [props.mounted])

    useEffect(() => {
      selfRef.current = document.querySelector<HTMLElement>('#portal')
      return () => {
        isPortalMounted(false)
      }
    }, [])

    return (mounted && selfRef.current)
      ? createPortal(
        <dialog data-portal-close className={css.overlay} onClick={e => unMountPortal(e)} ref={dialogRef}>
          <div tabIndex={-1}></div>
          <div className={css.body}>
            <button data-portal-close ref={buttonRef}>x</button>
            <section>
              {props.children}
            </section>
          </div>
          <div tabIndex={-1}></div>
        </dialog>, selfRef.current)
      : null
  }
)
