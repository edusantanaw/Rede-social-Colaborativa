import React from 'react'
import { useParams } from 'react-router-dom'

const Home = () => {
    const {id} = useParams<{id: string}>();
    console.log(id)
  return (
    <div
    style={{margin: "10%"}}>Home</div>
  )
}

export default Home