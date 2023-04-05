import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Spinner } from '../Spinner'
import { StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
  variant?: 'primary' | 'secondary'
}

export function Button({
  isLoading,
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  const { disabled } = { ...rest }

  return (
    <StyledButton
      disabled={disabled || isLoading}
      type="button"
      variant={variant}
      {...rest}
    >
      {isLoading && <Spinner size={16} />}
      {!isLoading && children}
    </StyledButton>
  )
}
