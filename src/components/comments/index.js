import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import PostContent from '../postContent'

const Comments = props => {
  return (
    <CommentContainer>
      <PostContent
        author={props.author}
        title=''
        message={props.message}
      ></PostContent>
    </CommentContainer>
  )
}

Comments.propTypes = {
  message: PropTypes.string,
  author: PropTypes.string
}

const CommentContainer = styled.div`
  background-color: #353535;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export default Comments
