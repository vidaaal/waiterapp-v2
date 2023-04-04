import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const prixClipFix = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }

  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }

  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }

  75% {
    lip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }

  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
`

export const Spinner = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;

  ::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: ${prixClipFix} 2s linear infinite;
  }

  @keyframes rotate {
  }

  @keyframes prixClipFix {
  }
`
