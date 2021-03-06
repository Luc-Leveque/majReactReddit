import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const handleLikeDislike = (
  id,
  likeOrDislike,
  setColorLike,
  setColorDislike
) => {
  const currentPost = JSON.parse(localStorage.getItem('post')) ?? []

  currentPost.map(post => {
    if (post.id == id) {
      post.like = likeOrDislike
    }
  })
  localStorage.setItem('post', JSON.stringify(currentPost))
  setColorLike(defineColorArrow(likeOrDislike, true))
  setColorDislike(defineColorArrow(likeOrDislike, false))
}

const defineColorArrow = (like, likeOrDislike) => {
  if (typeof like === 'undefined') {
    return '#000000'
  }
  if (like && likeOrDislike) {
    return 'Tomato'
  }
  if (!like && !likeOrDislike) {
    return 'Dodgerblue'
  }
  return '#000000'
}

const LikeDislike = ({ id, like }) => {
  const [colorLike, setColorLike] = useState(defineColorArrow(like, true))
  const [colorDislike, setColorDislike] = useState(
    defineColorArrow(like, false)
  )

  return (
    <LikeDislikeContainer>
      <Button
        onClick={() =>
          handleLikeDislike(id, true, setColorLike, setColorDislike)
        }
      >
        <FaArrowUp color={colorLike} />
      </Button>
      <Vote>Vote</Vote>
      <Button
        onClick={() =>
          handleLikeDislike(id, false, setColorLike, setColorDislike)
        }
      >
        <FaArrowDown color={colorDislike} />
      </Button>
    </LikeDislikeContainer>
  )
}

LikeDislike.propTypes = {
  like: PropTypes.bool,
  id: PropTypes.string
}

const Button = styled.a`
  margin: 0em 1em;
`

const Vote = styled.p`
  color: #6f7071;
  margin: 0px;
  font-size: 1em;
`

const LikeDislikeContainer = styled.div`
  background-color: #353535;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 1px;
`

export default LikeDislike
