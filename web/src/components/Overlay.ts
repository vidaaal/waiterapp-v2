import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: ${({ theme }) => `${theme.colors.black}cc`};
  backdrop-filter: blur(4.5px);
`
