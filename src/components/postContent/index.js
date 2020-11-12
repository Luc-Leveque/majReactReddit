import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../icon'

const PostContent = ({ author, title, message }) => {
  return (
    <div>
      <AuthorPost>Posted by u/{author}</AuthorPost>
      <PostHeaderContainer>
        <Icon width={25}></Icon>
        <HeaderPost>{title}</HeaderPost>
      </PostHeaderContainer>
      <BodyPost>{message}</BodyPost>
    </div>
  )
}

PostContent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  author: PropTypes.string,
  like: PropTypes.bool
}
const PostHeaderContainer = styled.div`
  background-color: #353535;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`

const AuthorPost = styled.p`
  color: #6f7071;
  margin: 0px;
  font-size: 12px;
`

const HeaderPost = styled.h4`
  color: #d7dadc;
  margin: 0px;
  margin-left: 5px;
`
const BodyPost = styled.p`
  color: #6f7071;
  font-size: 1em;
`

export default PostContent
