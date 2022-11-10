import { FC, ReactNode } from "react"
import './button.scss'

export interface ButtonProps {
  id?: string
  width?: string
  className?: string
  onClick?(): void
  variant?: 'primary' | 'secondary',
  disabled?: boolean,
  children?: ReactNode,
  type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<ButtonProps> = ({ id, width, className = '', onClick, children, variant = 'primary', disabled = false, type = 'button' }) => {
  return <button id={id} className={`button button-${variant} ${className}`} type={type} disabled={disabled} style={{ width }} onClick={onClick}>
    {children}
  </button>
}