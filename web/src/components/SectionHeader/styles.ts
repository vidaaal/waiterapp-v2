import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  gap: 8px;
  align-items: center;

  h3 {
    font-size: 1.125rem;
    line-height: 120%;
    font-weight: 600;
  }

  span {
    padding: 4px 8px;
    background: ${({ theme }) => `${theme.colors.gray[200]}33`};
    border-radius: 4px;
  }
`
