import styled from 'styled-components'

export const Table = styled.table`
  border-spacing: 0;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => `${theme.colors.gray[200]}cc`};
  color: ${({ theme }) => theme.colors.gray[500]};

  thead {
    background: ${({ theme }) => `${theme.colors.gray[200]}33`};
    padding: 16px 0;
  }
`

interface ThProps {
  width?: number
}

export const StyledTh = styled.th<ThProps>`
  padding: 16px;
  text-align: start;
  font-weight: 600;
  font-size: 0.875rem;
  height: 48px;

  vertical-align: middle;

  button {
    all: unset;
    cursor: pointer;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    gap: 8px;
  }

  width: ${({ width }) => !!width && `${width}px`};
`

interface TdProps {
  width?: number
}

export const StyledTd = styled.td<TdProps>`
  padding: 0 16px;
  height: 64px;

  button {
    all: unset;
    cursor: pointer;
    line-height: 0;

    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &.danger {
      svg {
        color: ${({ theme }) => theme.colors.brand.red};
      }
    }
  }

  width: ${({ width }) => (width ? `${width}px` : 'auto')};
`
