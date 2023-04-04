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

interface SpinnerProps {
  size?: number
}

export const Spinner = styled.span<SpinnerProps>`
  width: ${({ size }) => `${size}px` ?? `32px`};
  height: ${({ size }) => `${size}px` ?? `32px`};
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;

  ::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    animation: ${prixClipFix} 2s linear infinite;
  }
`
