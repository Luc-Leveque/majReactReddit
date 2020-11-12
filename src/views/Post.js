import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PostContent from '../components/postContent'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { nanoid } from 'nanoid'
import PostComment from '../components/postComment'
import Comments from '../components/comments'

const submit = (e, formState, history) => {
  e.preventDefault()

  formState.id = nanoid()

  const currentPost = JSON.parse(localStorage.getItem('comment')) ?? []
  currentPost.push(formState)
  localStorage.setItem('comment', JSON.stringify(currentPost))
  history.push(`/post/${formState.idPost}`)
}

const Post = props => {
  const [post, setPost] = useState({})
  const AllComment = JSON.parse(localStorage.getItem('comment')) ?? []

  const commentPost = AllComment.filter(
    comment => comment.idPost === props.match.params.id
  )

  const currentPosts = JSON.parse(localStorage.getItem('post')) ?? []
  useEffect(() => {
    currentPosts.map(post => {
      if (post.id == props.match.params.id) {
        setPost(post)
      }
    })
  }, [])

  return (
    <div>
      <Link to='/'>
        <FaArrowCircleLeft color='#6f7071' fontSize='2em' />
      </Link>
      <PostContainer>
        <PostContent
          author={post.author}
          title={post.title}
          message={post.message}
        ></PostContent>
      </PostContainer>
      <CommentTitle>Comments : </CommentTitle>
      {commentPost.map(comment => (
        <Comments
          key={comment.id}
          id={comment.id}
          message={comment.message}
          author={comment.author}
          like={comment.like}
        ></Comments>
      ))}

      <PostComment idPost={props.match.params.id} submit={submit}></PostComment>
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  author: PropTypes.string,
  like: PropTypes.bool,
  match: PropTypes.object
}

const PostContainer = styled.div`
  background-color: #353535;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
const CommentTitle = styled.p`
  background-color: #353535;
  width: 100%;
  color: #6f7071;
  font-size: 1em;
  margin-bottom: 15px;
`

export default Post
