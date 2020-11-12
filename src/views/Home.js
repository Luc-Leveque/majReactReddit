import { nanoid } from 'nanoid'
import React from 'react'
import Icon from '../components/icon'
import Post from '../components/post'
import PostRow from '../components/postRow'
import DataPost from '../data/post.json'

const submit = (e, formState, history) => {
  e.preventDefault()

  formState.id = nanoid()

  const currentPost = JSON.parse(localStorage.getItem('post')) ?? []
  currentPost.push(formState)
  localStorage.setItem('post', JSON.stringify(currentPost))
  history.push('/')
}

const Home = () => {
  const DataPostState = JSON.parse(localStorage.getItem('post')) ?? DataPost
  localStorage.setItem('post', JSON.stringify(DataPostState))

  return (
    <div>
      {DataPostState.map(post => (
        <PostRow
          key={post.id}
          id={post.id}
          title={post.title}
          message={post.message}
          author={post.author}
          like={post.like}
        ></PostRow>
      ))}
      <Post submit={submit}></Post>
      <Icon></Icon>
    </div>
  )
}

export default Home
