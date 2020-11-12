import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import avatarDefault from '../../assets/avatar_default.png'

const Icon = props => {
  return <Avatar width={props.width} src={props.image}></Avatar>
}

Icon.defaultProps = {
  image: avatarDefault
}

Icon.propTypes = {
  image: PropTypes.string,
  width: PropTypes.number
}

const Avatar = styled.img`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.width}px`};
  border-radius: 30px;
  margin: 0px:
`
export default Icon
