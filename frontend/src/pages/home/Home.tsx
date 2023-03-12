
import React from 'react'
import NewPost from './components/NewPost'
import { HomeContainer } from './styles'

const Home = () => {
  return (
    <HomeContainer>
        <NewPost />
    </HomeContainer>
  )
}

export default Home