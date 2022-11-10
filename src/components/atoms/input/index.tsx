import { FC } from "react"
import classNames from "classnames"
import './input.scss'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  width?: string
  inputRef?: React.RefObject<HTMLInputElement>
  error?: string | boolean
}

export const Input: FC<InputProps> = ({ 
  width, 
  inputRef,
  error = '', 
  ...props
}) => {

  return (
    <div style={{ width }}>
      <input
        ref={inputRef}
        className={classNames('input', { 'input--error': error })}
        {...props}
      />
      {error && <p className="input__error-msg">{error}</p>}
    </div>
  )

}