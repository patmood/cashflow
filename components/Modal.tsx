import React from 'react'
import ReactDOM from 'react-dom'

export function Modal({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode
  onClose: () => void
  title?: string
}) {
  if (typeof document === 'undefined') return null
  return ReactDOM.createPortal(
    <>
      <div className="backdrop" onClick={onClose}>
        <div className="content" onClick={(e) => e.stopPropagation()}>
          {title && <h2>{title}</h2>}
          {children}
        </div>
      </div>
      <style jsx>
        {`
          .backdrop {
            background-color: rgba(0, 0, 0, 0.3);
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .content {
            box-sizing: border-box;
            max-width: 100%;
            background-color: var(--color-bg);
            padding: 1rem;
            border-radius: var(--border-radius);
          }
        `}
      </style>
    </>,
    document.body
  )
}
