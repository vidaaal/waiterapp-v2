import styled from 'styled-components'

export const Container = styled.nav`
  width: 108px;
  background: ${({ theme }) => theme.colors.white};
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
`

export const Paths = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const BottomActions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`

export const SignOut = styled.button`
  all: unset;
  line-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[400]};
  cursor: pointer;

  span {
    font-size: 0.875rem;
    margin-top: 8px;
    line-height: 140%;
    font-weight: 500;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`
