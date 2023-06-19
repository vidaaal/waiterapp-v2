import styled from 'styled-components'

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 928px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      all: unset;
      line-height: 0;
      cursor: pointer;
    }
  }
`
