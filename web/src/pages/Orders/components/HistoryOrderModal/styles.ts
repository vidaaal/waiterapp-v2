import styled from 'styled-components'

export const ModalBody = styled.main`
  padding: 32px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  width: 480px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    all: unset;
    cursor: pointer;
    line-height: 0;
  }
`

export const DateContainer = styled.div`
  margin-top: 32px;

  p {
    font-size: 0.875rem;
    opacity: 80%;
    font-weight: 500;
    margin-bottom: 8px;
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
  margin-top: 32px;
`
