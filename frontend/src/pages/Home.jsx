import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import Menu from '../components/Menu'

const Home = () => {

    const [category,setCategory]=useState('All');
    useEffect(()=>{
        console.log(category);
    },[category])

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Menu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
