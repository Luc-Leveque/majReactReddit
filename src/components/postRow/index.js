import React from 'react'

import PropTypes from 'prop-types'

import styled from 'styled-components'
import Icon from '../icon'
import { Link } from 'react-router-dom'
import LikeDislike from '../likeDislike'

const PostRow = props => {
  return (
    <PostContainer>
      <StyledLink to={`/post/${props.id}`}>
        <AuthorPost>Posted by u/{props.author}</AuthorPost>
        <PostHeaderContainer>
          <Icon width={25}></Icon>
          <HeaderPost>{props.title}</HeaderPost>
        </PostHeaderContainer>
        <BodyPost>{props.message}</BodyPost>
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

export default PostRow
