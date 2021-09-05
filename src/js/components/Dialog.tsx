import * as React from "react"
import { Dialog as ReachDialog } from "@reach/dialog"

interface Props {
  title: string
  children: React.ReactChildren
}

const Dialog = ({ title, children }: Props) => {
  const handleClose = () => (window.location.pathname = "/")

  return (
    <ReachDialog
      aria-label={title}
      className="dialog"
      isOpen={true}
      onDismiss={handleClose}
    >
      <header className="dialog__header">
        <button className="dialog__close" onClick={handleClose}>
          <span className="visually-hidden">Close</span>
          <svg
            width="30"
            height="29"
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

        <h1>{title}</h1>
      </header>

      {children}
    </ReachDialog>
  )
}

export default Dialog
