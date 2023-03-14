
import React from 'react'
import Feed from './components/Feed'
import NewPost from './components/NewPost'
import { HomeContainer } from './styles'

const Home = () => {


  return (
    <HomeContainer>
        <NewPost />
        <Feed />
    </HomeContainer>
  )
}

export default Home