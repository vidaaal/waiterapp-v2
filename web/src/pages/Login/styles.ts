import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 384px;
  width: 100%;
`

export const Header = styled.header`
  text-align: center;

  p {
    line-height: 150%;
    margin-bottom: 4px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`
