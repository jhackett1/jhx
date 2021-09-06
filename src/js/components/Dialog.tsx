import * as React from "react"
import { Dialog as ReachDialog } from "@reach/dialog"
import Helmet from "react-helmet"

interface Props {
  title: string
  caption: string
  children: React.ReactChildren
}

const Dialog = ({ title, children, caption }: Props) => {
  const handleClose = () => (window.location.hash = "/")

  return (
    <ReachDialog
      aria-label={title}
      as="article"
      className="dialog"
      isOpen={true}
      onDismiss={handleClose}
    >
      <Helmet>
        <title>{title} | Jaye Hackett</title>
      </Helmet>

      <header className="dialog__header">
        <button className="dialog__close" onClick={handleClose}>
          <span className="visually-hidden">Close</span>
          <svg
            width="25"
            height="25"
            viewBox="0 0 30 29"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.15668"
              y="26.3298"
              width="36.9165"
              height="2.80379"
              transform="rotate(-45 1.15668 26.3298)"
            />
            <rect
              x="26.9301"
              y="28.3124"
              width="36.9165"
              height="2.80379"
              transform="rotate(-135 26.9301 28.3124)"
            />
          </svg>
        </button>

        <p className="dialog__caption">{caption}</p>
        <h1 className="dialog__title">{title}</h1>
      </header>

      {children}
    </ReachDialog>
  )
}

export default Dialog
