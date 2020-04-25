import styled from 'styled-components'

const Avatar = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`

Avatar.defaultProps = {
  src: '/images/PaulSimonOngpin.jpg',
  alt: 'Paul Simon Ongpin',
  width: '150px',
  height: '150px',
  className: 'rounded-full',
}

export default Avatar
