import styled from 'styled-components'

export const Board = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => `${theme.colors.gray[200]}66`};
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;

    figure {
      font-size: 1.125rem;
    }

    span {
      padding: 4px 8px;
      background: ${({ theme }) => `${theme.colors.gray[200]}33`};
      color: ${({ theme }) => theme.colors.gray[500]};
      border-radius: 4px;
      font-size: 1rem;
    }

    strong {
      font-weight: 600;
      font-size: 1.125rem;
    }
  }
`

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    margin-top: 24px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => `${theme.colors.gray[200]}66`};
    height: 128px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    strong {
      font-weight: 500;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.gray[500]};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`
