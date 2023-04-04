import styled, { css } from 'styled-components'

export const Container = styled.label`
  width: 100%;
`

export const TextLabel = styled.small`
  font-weight: 400;
  font-size: 0.875rem;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 8px;

  &:has(input:focus) {
    input {
      border: 1px solid ${({ theme }) => theme.colors.gray[400]};
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    svg {
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`

interface RawInputProps {
  error: boolean
}

export const RawInput = styled.input<RawInputProps>`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[400]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  font-size: 0.875rem;
  outline: 0;

  ::placeholder {
    font-size: 0.875rem;
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.brand.red} !important;
    `}
`

export const RightIcon = styled.button`
  all: unset;
  line-height: 0;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.gray[300]};

    :hover {
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`

export const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  small {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.brand.red};
  }

  svg {
    color: ${({ theme }) => theme.colors.brand.red};
  }
`
