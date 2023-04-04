import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  background: ${({ theme }) => theme.colors.brand.red};
  border-radius: 44px;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[200]};
    cursor: not-allowed;
  }
`
