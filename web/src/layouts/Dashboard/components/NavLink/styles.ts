import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray[400]};

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

  &.active {
    color: ${({ theme }) => theme.colors.brand.red};

    ::after {
      content: '';
      width: 12px;
      height: 2px;
      border-radius: 44px;
      background: ${({ theme }) => theme.colors.brand.red};
      position: absolute;
      bottom: -8px;
    }
  }
`
