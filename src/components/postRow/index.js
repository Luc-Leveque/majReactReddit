import React from 'react'

import PropTypes from 'prop-types'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LikeDislike from '../likeDislike'
import PostContent from '../postContent'

const PostRow = props => {
  return (
    <PostContainer>
      <StyledLink to={`/post/${props.id}`}>
        <PostContent
          author={props.author}
          title={props.title}
          message={props.message}
        ></PostContent>
      </StyledLink>
      <LikeDislike id={props.id} like={props.like}></LikeDislike>
    </PostContainer>
  )
}

PostRow.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  author: PropTypes.string,
  like: PropTypes.bool
}

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const PostContainer = styled.div`
  background-color: #353535;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export default PostRow
