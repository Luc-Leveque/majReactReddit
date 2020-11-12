import React from 'react'
import Icon from '../components/icon'
import PostRow from '../components/postRow'
import DataPost from '../data/post.json'

const Home = () => {
  //const [posts] = useState(DataPost)

  return (
    <div>
      {DataPost.map(post => (
        <PostRow
          key={post.id}
          id={post.id}
          title={post.title}
          message={post.message}
          author={post.author}
        ></PostRow>
      ))}
      <Icon></Icon>
    </div>
  )
}

export default Home
