import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  width: 480px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    button {
      all: unset;
      line-height: 0;
      cursor: pointer;
    }
  }

  .info {
    text-align: center;
    margin-top: 48px;

    p + p {
      margin-top: 16px;
    }

    p {
      font-weight: 500;
    }
  }

  .actions {
    margin-top: 48px;
    display: flex;
    align-items: center;
    gap: 45px;
  }
`
