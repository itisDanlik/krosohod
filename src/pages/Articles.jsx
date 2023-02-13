import React from 'react'
import Article from '../components/ArticleBlock/index'
const Articles = () => {
  const [posts, setPosts] = React.useState(
    [
      {id: 1, title: "JavaScript", body: 'Description'},
      {id: 2, title: "Swift", body: 'Язык'}
    ]
  ) 
  return (
    <div>
      <h1>Cписок постов</h1>
      {posts.map(post =><Article key={post.id} post={post}/>)}
      
      
      
    </div>
  )
}

export default Articles
