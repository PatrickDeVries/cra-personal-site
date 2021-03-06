

import styled from 'styled-components/macro'
import { MOBILE } from '../theme/mediaQueries'

export const Wrapper = styled.div<{ firstHit?: boolean }>`
  position: fixed;
  top: 2rem;
  right: 3.5rem;
  ${MOBILE} {
    right: 6rem;
  }
  ${({ firstHit }) => !firstHit && 'transform: translateY(-100vh);'}

  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color: ${({ theme }) => theme.background}77;
  border: 1px ${({ theme }) => theme.secondary} solid;

  transition: transform 0.25s ease;
`

export const GearIndicator = styled.p`
  text-align: right;
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
`

export const Instructions = styled.p`
  text-align: right;
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
`