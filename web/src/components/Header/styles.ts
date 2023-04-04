import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  svg {
    color: ${({ theme }) => theme.colors.gray[500]};
    width: 32px;
    height: 32px;
  }
`

export const Description = styled.div`
  p {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`
