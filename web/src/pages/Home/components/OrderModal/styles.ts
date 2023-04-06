import styled from 'styled-components'

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      all: unset;
      cursor: pointer;
      line-height: 0;

      svg {
      }
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
      font-weight: 500;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;
    max-height: 150px;
    overflow: auto;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        width: 48px;
        height: 40px;
        object-fit: cover;
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray[400]};
        margin-left: 16px;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 0.875rem;
          color: ${({ theme }) => theme.colors.gray[400]};
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
  margin-top: 32px;
`
