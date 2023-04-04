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
  margin-top: 8px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;

  &:has(input:focus) {
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};

    input {
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
  background: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 0.875rem;
  outline: 0;
  border: 0;
  border-radius: 8px;

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
  cursor: pointer;
  margin-right: 16px;

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
