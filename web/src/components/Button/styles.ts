import styled, { css } from 'styled-components'

interface StyledButtonProps {
  variant: 'primary' | 'secondary'
}

const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.colors.brand.red};
    color: ${({ theme }) => theme.colors.white};

    &:disabled {
      background: ${({ theme }) => theme.colors.gray[200]};
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.brand.redDark};
    }
  `,
  secondary: css`
    width: fit-content;
    background: transparent;
    color: ${({ theme }) => theme.colors.brand.red};

    &:disabled {
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    &:not(:disabled):hover {
      color: ${({ theme }) => theme.colors.brand.redDark};
    }
  `,
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 44px;
  border: 0;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ variant }) => buttonVariants[variant] || buttonVariants.primary};
`
