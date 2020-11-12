import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Post = ({ submit }) => {
  Post.propTypes = {
    submit: PropTypes.func
  }
  const history = useHistory()
  const [formState, setformState] = useState({
    author: '',
    title: '',
    message: ''
  })

  return (
    <section>
      <Container
        onSubmit={e => {
          submit(e, formState, history)
          e.target.reset()
        }}
      >
        <Input
          type='text'
          placeholder='Author'
          required='required'
          onChange={e => setformState({ ...formState, author: e.target.value })}
        />
        <Input
          type='text'
          placeholder='Title'
          required='required'
          onChange={e => setformState({ ...formState, title: e.target.value })}
        />
        <Input
          type='text'
          placeholder='Text (optional)'
          onChange={e =>
            setformState({ ...formState, message: e.target.value })
          }
        />

        <Button type='submit' id='submit' value='Post' />
      </Container>
    </section>
  )
}

const Input = styled.input`
  font-size: 18px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding-left: 35px;
  background: white;
`

const Button = styled.input`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Post
