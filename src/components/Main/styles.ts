import styled from 'styled-components'
import media from 'styled-media-query'

export const Block = styled.div``

export const IconWrapper = styled.div`
  display: flex;
`

export const Icon = styled.div`
  color: white;
  cursor: pointer;
  margin: 3rem auto;
  text-align: center;
  transition: color 0.2s ease-in-out;
  width: 4rem;

  &:hover {
    color: #15ab89;
  }

  ${media.lessThan('medium')`
    margin: 2rem auto 3rem;
    width: 3rem;
  `}
`

export const IconRotate = styled(Icon)`
  transition: transform 0.8s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`

export const Footer = styled.footer`
  color: white;
  font-size: 1.4rem;

  a,
  span {
    color: #15ab89;
  }
`

export const Warning = styled(Footer)`
  margin: 1rem auto;

  ${media.lessThan('medium')`
    width: 85%;
  `}
`
